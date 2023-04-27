---
layout: document
subtitle: Service Performance Measures
tags:
  - artefact
_template: standard_document
---

All services should define measurements that help people understand if the service is performing as it should. 

When deciding upon which metrics are most appropriate for a service, consider the [user needs](/user-needs) that the service meets. A metric that is suitable for inclusion in the service contract is typically one that is directly relatable to those needs.

It may be that additional metrics are useful for the individual performing the role of the [Service Manager](/service-managers), or the team that works to keep the service operating. While those metrics are important, and nothing here should discourage anybody from collecting them, they shouldn't be confused with the metrics contained in the contract.

## Metrics vs Targets

Often people confuse metrics with targets, but it is important to consider them independently. 

For example, Infrastructure-as-a-Service may (and probably should) report uptime as a performance measurement. A potential consumer of that service may have a requirement for the uptime to reach a particular target, and that requirement will influence a service's decision to consume another service or to look elsewhere.

If there is a service that is created to serve a particular target - for example, a high-availability IaaS service - then that target should be captured as a user need.

## Recording Service Performance Measures

When undertaking an OSOM transformation, one of the first services an organisation should define is a Performance Platform service, to record, and present service measures.

There are many tools with the capability to do so, but one tool that could be considered is the Amazon Web Services [Performance Dashboard](https://aws.amazon.com/solutions/implementations/performance-dashboard-on-aws/) tool.

## 
