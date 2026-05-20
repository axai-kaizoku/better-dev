# ec2 - linux

- what is ec2 instance in aws ?
- An amazon ec2 (elastic compute cloud) instance is a virutal server running in AWS cloud. you can rent this VM from amazon on a pay-as-you-go basis to run your services

- The "Elastic" part of its name means you can quickly spin up or delete instances, or instantly scale their size as your traffic and computing demands change.


- to run a service in vm
- [ ] sudo systemctl start nginx
- [ ] sudo systemctl enable nginx
- [ ] sudo systemctl status nginx
- [ ] sudo systemctl restart nginx
- [ ] sudo systemctl stop nginx
- [ ] sudo systemctl reload nginx

- to fix permissions on ec2
- [ ] sudo chown -R ubuntu:ubuntu /var/www/html

- to send files from local to ec2
- [ ] scp -i /path/to/your-key.pem index.html user@your-ec2-ip:/var/www/html
- [ ] scp -i /path/to/your-key.pem -r ./out/* user@your-ec2-ip:/var/www/html
