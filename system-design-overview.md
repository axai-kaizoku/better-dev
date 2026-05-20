## System Design Overview

---

hardware level - bits 0-1
1 - bit is the smallest

byte - 8 bits 

KB - 1024 bytes
MB - 1024 KBs
GB - 1024 MBs
TB - 1024 GBs


Disks - persists storage

HDDs - SSDs

80 MB/s - 160 MB/s --- 500 MB/s - 3,500 MB/s


RAM: a disk, which can hold data structures, variables and application data which are currently being used.

- volatile memory - it requires power to retain it's contents

- read/write speeds > 5000 MB/s

Cache: it's smaller than ram, in MBs. faster than ram, few nanoseconds 
- CPU checks the L1 Cache first, L2, L3 and finally RAM
- to optimize performance

CPU: it what's runs the code, decodes code

complier - compiles to machine code bits and runs in the machine
it has access of ram, caches, disks

Motherboard: Component that connects everything
it provides the pathways

# High Level Architecture of a Production App

- CI/CD pipeline - Continous Integration and Continous Deployment - Pushes your code from your local to prod by performing checks and test without any manual intervention
- Platforms like Jenkins, Github Actions for automating and deployment processes
- Once data is in the prod, load-balancers or reverse-proxies like nginx handles user requests.
- They maintain request distributed to server equally, while maintaining a smooth user experience even when traffic spikes
- Server has to store data, we'll have an external server which has storage. It's not in the same server hosted in different one connected via network.
- Our server can communicate with multiple services. to ensure everything runs smoothly, we've logging and monitoring systems, keeping a keen eye on systems, logging data. 
- It's standard practice to store logs on external services often rather than prod service.
- Tools like PM2, sentry for frontend issues 
- Alert Service, if something fails, we'll push to alert service which pushes notifications.
- Slack channel for alerts, 
- Developers when rasied an issue or bug, goes through logs, and identify the issue, replicate the issue in local env. 
- Golden rule don't replicate issues on prod. instead recreate issues in staging or test envs. this ensures user won't be effected by testing


# Pillars of System Design

- What makes a good design?
- scalability, maintainability, efficiency, reliability
- moving data, storing data, transforming data
users to server, server to server -- sql or no sql, access patterns, indexes, backup solutions -- aggregating log files, converting user input to diff format

# CAP Theorem
-- Brewer's Theorem 


