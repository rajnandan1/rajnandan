# Practical PromQL Examples

PromQL is a powerful query language that allows you to query metrics from Prometheus. Here are some practical examples that you can use to query metrics from Prometheus.

## Working with counters

Let's assume we have a metric called `http_request_duration_seconds_count` that records the total number of HTTP requests made to a server. The metric has the following labels:

-   `method`: The HTTP method used for the request (e.g., GET, POST, PUT, DELETE).
-   `status`: The HTTP status code returned by the server (e.g., 200, 404, 500).
-   `handler`: The handler function that processed the request (e.g., `/api/v1/users`, `/api/v1/posts`).

### Time Durations

```promql
# Count the total number of HTTP requests in the last 1 second
sum(rate(http_request_duration_seconds_count))
```

```promql
# Count the total number of HTTP requests in the last 15 minutes
sum(rate(http_request_duration_seconds_count[15m]) * 60 * 15)
```

```promql
# Count the total number of HTTP requests in the last 1 day
sum(rate(http_request_duration_seconds_count[1d]) * 60 * 60 * 24)
```

```promql
# Count the total number of HTTP requests in the last 1 week
sum(rate(http_request_duration_seconds_count[1w]) * 60 * 60 * 24 * 7)
```

The idea for these queries are simple - you are calculating the rate of change of the counter metric over a specific time period and then multiplying it by the number of seconds in that time period to get the total count.

### Group by

```promql
# Count the total number of HTTP requests by method in the last 1 minute
sum(rate(http_request_duration_seconds_count[1m] * 60)) by (method)
```

```promql
# Count the total number of HTTP requests by status code where handler is equal to /users in the last 5 minutes
sum(rate(http_request_duration_seconds_count{handler = "/users"}[5m] * 300)) by (status)
```

### Greater than

```promql
# Count the total number of HTTP requests by method in the last 1 minute if the count is greater than 50
sum(rate(http_request_duration_seconds_count[1m] * 60)) by (method) > 50
```

### Less than

```promql
# Count the total number of HTTP requests by method in the last 1 minute if the count is less than 100
sum(rate(http_request_duration_seconds_count[1m] * 60)) by (method) < 100
```

### Within Range

```promql
# Count the total number of HTTP requests by method in the last 1 minute if the count is between 50 and 100
sum(rate(http_request_duration_seconds_count[1m] * 60)) by (method) > 50 < 100
```

### Regular Expressions

Let us suppose we have rest apis for users like

-   POST /users
-   GET /users/:user_id
-   PUT /users/:user_id
-   DELETE /users/:user_id

```promql
# Count the total number of HTTP requests by handler and status code for similar handlers in the last 5 minutes
sum(rate(http_request_duration_seconds_count{handler =~ "/users.*"}[5m] * 300)) by (status, handler)
```

```promql
# 5xx errors for the last 1 hour for each handler and method
sum(rate(http_request_duration_seconds_count{status=~"5.."}[1h]) * 60 * 60) by (handler, method)
```

### Offset

```promql
# Count the total number of HTTP requests by handler and status code for similar handlers in the last to last 5 minutes
sum(rate(http_request_duration_seconds_count{handler =~ "/users.*"}[5m] offset 5m) * 300) by (status, handler)
```

### Delta

```promql
# Count the difference in the total number of HTTP requests by handler and status code for similar handlers in the last 5 minutes
sum(rate(http_request_duration_seconds_count{handler =~ "/users.*"}[5m] * 300) - rate(http_request_duration_seconds_count{handler =~ "/users.*"}[5m] offset 5m) * 300) by (status, handler)
```

### Percentage

```promql
# Calculate the percentage of 5xx errors for each handler in the last 1 hour
sum(rate(http_request_duration_seconds_count{status=~"5.."}[1h]) * 60 * 60) / (sum(rate(http_request_duration_seconds_count[1h]) * 60 * 60) by (handler) > 0) * 100
```

---

> :Author name=Raj Nandan Sharma,
> date=18th July 2024,
> avatar=/assets/images/me.jpg,
> url=https://www.rajnandan.com
