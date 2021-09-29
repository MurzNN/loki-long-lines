# loki-long-lines

Test to reproduce Loki issues:
- https://github.com/grafana/loki/issues/4392 
- https://github.com/grafana/loki/issues/2281

Launch:
1. `docker-compose up1
2. Go to http://localhost:3000 and login, go to Explore
3. Lookup the Loki logs of the 'app' container (by container id)

You will see that lines with more than 16384 characters (16kb) are splitted to two lines.
