> :MetaOverride property=og:image
>
> https://www.rajnandan.com/assets/images/og-images/blogs-may-2024-browser-window-mq.png

 

> :MetaOverride property=og:description
>
> At my work I have to build solutions around communication between browser and iframe or a popup window .ie `<iframe>` or `window.open()`



# Messaging between Browser Windows using ruto.js

At my work I have to build solutions around communication between browser and iframe or a popup window .ie `<iframe>` or `window.open()`. I have to use `postMessage` js api, and feel it is not very developer friendly. Consider the below situation
1. The parent window send a message to the child window
2. The child window receives this message, 
3. The child calls a backend server with the message
4. The child sends the response back to parent
5. The parent wants to receive this backend response, does some calculation.
6. The parent then wants to send a second message to the child.
7. And the same thing repeats

While this may seem trivial when you are doing simple you are doing simple http calls from frontend but across windows something like this is much more complicated. We have also to keep in mind that security is our outmost concern.

Let us try to code this thing. Parent is parent.com, child is at child.com.

I am assuming parent has child as an iframe

## 1. Send Message from parent to child

```js
//parent.com
iframe.contentWindow.postMessage(message, 'child.com');

```

## 2. Receive message from parent in child
```js
//child.com
window.addEventListener('message', (event) => {
	const expectedOrigin = 'parent.com';
	if (event.origin !== expectedOrigin) {
		return
	}
	const message = event.data;
	doPorcessingOfMessage(message)
})
```

## 3. Child does some processing

```js
//child.com
async function doPorcessingOfMessage(message){
	const resp = await api(message);
	return resp;
}
```

## 4. Child sends response back

```js
//child.com
window.addEventListener('message', (event) => {
	const expectedOrigin = 'parent.com';
	if (event.origin !== expectedOrigin) {
		return
	}
	const message = event.data;
	const resp = await doPorcessingOfMessage(message);
	window.parent.postMessage(resp, 'parent.com');
})

```

## 5. Parent receives the message
```js
//parent.com
window.addEventListener('message', (event) => {
	const expectedOrigin = 'child.com';
	if (event.origin !== expectedOrigin) {
		return
	}
	const message = event.data;
	
})
```

## 6. Parent sends 2nd message

```js
//parent.com
window.addEventListener('message', (event) => {
	const expectedOrigin = 'child.com';
	if (event.origin !== expectedOrigin) {
		return
	}
	const message = event.data;
	const newMessage = getNewMessage(message);
	iframe.contentWindow.postMessage(message, 'child.com');
})
```

As we can see the process is completely event based. And writing code to do something like this gets very messy.

What if there was nicer way to do these. Let us say

```js
//parent.com
const resp1 = await sendMessageToChild(message1);
const message2 = await someProcessing(resp1);
const resp2 = await sendMessageToChild(message2);
```

```js
//child.com
const message1 = await receiveMessageFromParent();
const resp1 = await someProcessing(message1);
await sendMessageToParent(resp1)

```

In the above scenario, the parent is the orchestrator and child is just responding to actions triggered by parent.

In a different scenario a child can be the orchestrator and the parent would be just responding to actions triggered by the child.

That means both the parent and child can send and receiver. If parent is send then child has to be receive, and when parent is receiver the child has to be sender.

## Handle Retry

We have to make sure that there are retries in communication. And also both parent and child should be ready to receive. 

## Security 
We have to have origin checks in both child and domain. Ignore all messages if not received from where we want to receive

## Solution

I think the best way to do this would be to build it like a client/server kind of a thing. Let us take an example of web client and node js express server.

> :Tabs
> > :Tab title=Client
> >   
> > ```js
> > fetch('/message').then(response => response.json())
> >	.then(data => {
> >		document.getElementById('response').textContent = JSON.stringify(data, null, 2);
> >	})
> >	.catch(error => {
> >		document.getElementById('response').textContent = 'Error: ' + error;
> >	});
> > ```
>                                    
> > :Tab title=Server
> >   
> > ```js
> > app.get('/message', (req, res) => {
> >     res.send('Hello, world!');
> > });
> > ```


I started to write the solution but soon realized it is not easy. So I have to take a more conservative approach

## Introducing Ruto

Ruto is a lightweight(4KB), fast and easy-to-use JS library that streamlines the communication between parent and child window(iframe/popup).

It uses client-server design pattern to communicate between parent and child window. Any window can become the client or the server depending on who wants to send. It abstracts out the complications of postMessage API and provides a simple API to send and receive messages.

You can visit the github page [here](https://github.com/rajnandan1/ruto)

## Ruto Examples

### Parent to iframe
Parent will send a message iframe, Parent expects a response from the iframe with 10 secs


> :Tabs
> > :Tab title=Parent
> >
> > ```html
> > <iframe id="iframe" src="https://example.com/child.html"></iframe>
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const iframe = document.getElementById('iframe');
> > const message = 'Hello from parent';
> > const options = {
> >     timeout: 10000
> > }
> >
> > ruto.send("https://example.com/parent-to-iframe/topic1", iframe, message, options).then((response) => {
> >     console.log(response); //Hello from child
> > }).catch((error) => {
> >     console.log(error);
> > });
> > </script>
> > ```
> 
> > :Tab title=Child
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > ruto.receive("/parent-to-iframe/topic1", window.parent, (response, message) => {
> >     console.log(message); //Hello from parent
> >     return response.send('Hello from child'); //ra
> > });
> > </script>
> > ```

### Iframe to Parent

Iframe will send a message to parent, and expects a response from parent within 5 secs

> :Tabs
> > :Tab title=Parent
> >
> > ```html
> > <iframe id="iframe" src="https://example.com/child.html"></iframe>
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const iframe = document.getElementById('iframe');
> > ruto.receive("/iframe-to-parent/topic1", iframe, (response, message) => {
> >     console.log(message); //Hello from iframe
> >     return response.send('Hello from parent');
> > });
> > </script>
> > ```
>
> > :Tab title=Child
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const message = 'Hello from iframe';
> > const options = {
> >     timeout: 5000
> > }
> > ruto.send("https://example.com/iframe-to-parent/topic1", window.parent, message, options).then((response) => {
> >     console.log(response); //Hello from parent
> > }).catch((error) => {
> >     console.log(error);
> > });
> > </script>
> > ```

### Parent to Popup

Parent will send a message to popup, and expects a response from popup within 5 secs

> :Tabs
> > :Tab title=Parent
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const popup = window.open('https://example.com/popup.html', 'popup', 'width=600,height=400');
> > const message = 'Hello from parent';
> > const options = {
> >     timeout: 5000
> > }
> > ruto.send("https://example.com/parent-to-popup/topic1", popup, message, options).then((response) => {
> >     console.log(response); //Hello from popup
> > }).catch((error) => {
> >     console.log(error);
> > });
> > </script>
> > ```
>
> > :Tab title=Popup
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > ruto.receive("/parent-to-popup/topic1", window.opener, (response, message) => {
> >     console.log(message); //Hello from parent
> >     return response.send('Hello from popup');
> > });
> > </script>
> > ```

### Popup to Parent

Popup will send a message to parent, and expects a response from parent within 5 secs

> :Tabs
> > :Tab title=Parent
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const popup = window.open('https://example.com/popup.html', 'popup', 'width=600,height=400');
> > ruto.receive("/popup-to-parent/topic1", popup, (response, message) => {
> >     console.log(message); //Hello from popup
> >     return response.send('Hello from parent');
> > });
> > </script>
> > ```
>
> > :Tab title=Popup
> >
> > ```html
> > <script src="https://cdn.jsdelivr.net/gh/rajnandan1/ruto/dist/ruto.min.js"></script>
> > <script>
> > const message = 'Hello from popup';
> > const options = {
> >     timeout: 5000
> > }
> > ruto.send("https://example.com/popup-to-parent/topic1", window.opener, message, options).then((response) => {
> >     console.log(response); //Hello from parent
> > }).catch((error) => {
> >     console.log(error);
> > });
> > </script>
> > ```

	
> :Author name=Raj Nandan Sharma,
> date=18th May 2024,
> avatar=/assets/images/me.jpg,
> url=https://www.rajnandan.com   
		