---
title: "Service Transition and Operation"
author: "Daniela"
created: "October 27, 2020"
revised: "September 5, 2021"
time: "12 min"
image: "/images/insights/service-transition-and-operation.jpg"
imageTitle: "Service Transition and Operation"
excerpt: "In this Insight you can find information on service transition and operation practices regarding 1) service performance and availability, 2) documentation and knowledge bases, 3) release and deployment management, and 4) changes, incidents, and service requests."
---

These tasks and practices are based on ITIL 4 [1], a service management framework, but they have been grouped and simplified in an attempt to make it easier to understand the big picture and relationships between them.

Note that many of these tasks are relevant already earlier in the product life cycle as all tasks need to be both planned and implemented. In addition, many of these tasks are relevant for both development projects and continuous development.

## 1. Service Performance and Availability

### 1.1 Set Targets for Service Performance

Set clear business-based targets for service performance. Then monitor and manage service delivery against these targets. 

**Service level agreements (SLAs)** have been used as a tool to measure the performance of services from the customer’s point of view. A service level agreement is a documented agreement which identifies the services required and the expected level of service in measurable form. It involves collecting and analysing information from various sources such as customer engagement and feedback, or operational and business metrics.

### 1.2 Ensure the Expected Performance

Ensure that services achieve agreed and expected performance, satisfying current and future demand in a cost-effective way. 

Service performance is often associated with the number of service actions performed in a timeframe, and the time required to fulfil a service action. Service performance significantly contributes to customer/user satisfaction.

### 1.3 Ensure Service Availability

Ensure that services deliver agreed levels of availability. Basically, availability is about how frequently the service fails, and how quickly it recovers after failure. 

The way availability is defined depends on the service and the users’ and customers’ needs. You need to agree the targets for availability, and then design infrastructure and applications that can deliver required availability levels. Going forward, availability needs to be monitored, analysed, reported, and improved.

### 1.4 Ensure Service Continuity

Ensure that service availability and performance is maintained at a sufficient level in the event of a disaster. This includes setting objectives, creating recovery plans, and analysing business impact. 

You need to define what is understood as a disaster in your own organization. Less significant events will be dealt with as part of incident management (see below).

## 2. Documentation and Knowledge Bases

### 2.1 Provide Information on Services

Provide a single source of consistent information on all services and service offerings. Ensure that it is available to the relevant audience, and maintain it. 

The service catalogue lists information on the services which are currently available. It can take many forms such as a document, online portal, or a tool of some kind. It can include for example technical specifications, help pages, offerings, agreements, costs, and possibilities for customer interaction. 

It might be useful to customise the views of the catalogue for different audiences like customers, users, and IT.

### 2.2 Provide Information on Configuration Items

Ensure accurate and reliable information about the configuration items is available. A configuration item is any component that needs to be managed to deliver an IT service. Typical configuration items are services, hardware, software, networks, buildings, people, suppliers, and documentation. 

Configuration management provides information also on the relationships of configuration items. You need to balance the effort needed to collect and maintain this information with the value the information creates.

## 3. Release and Deployment Management

### 3.1 Plan and Manage Releases

Structure the release process to make new and changed services and features available for use. A release is a version of a service (or other configuration item/s) that is made available for use. 

Releases can range from small to very large. They can include infrastructure and application components, documentation, training, updated processes and tools, and any other components that are required. 

Release management includes making a release plan, which specifies the new and changed components, the timing for their release (release schedule) and the impact analysis of performing the release. In addition, communication around deployments (see below) is part of release management.

### 3.2 Plan and Manage Deployments

Move new or changed service components to live environments. Service components can include hardware, software, documentation, processes, or any other components. Deploying these components to live environment requires a deployment plan which includes a detailed checklist of steps required to deploy. 

Deployment management may also be involved in deploying components to other environments than live environment (e.g. test environment), and it works closely with release management and change control. 

There are different approaches that can be used for deployment, and it is possible to use a combination of these approaches as well. Different approaches include for example the following methods:

- Phased Deployment: the new or changed components can be deployed to just part of the production environment (e.g. one country) at a time.
- Continuous Delivery: components can be integrated, tested, and deployed frequently and in small releases, typically using automation.
- Big Bang Deployment: components can be deployed to all targets at the same time.
- Pull Deployment: components can be made available in a repository, and users download the software when they choose.

## 4. Changes, Incidents, and Service Requests

### 4.1 Control Changes

Regarding changes, ensure both risks as well as expected benefits are properly assessed, authorize changes to proceed, and manage the change schedule. The goal is to maximize the number of successful IT changes and minimise the amount of unnecessary changes. 

A change request can be a request for an addition, a modification, or removal of something that could have direct or indirect impact on services. You need to define the scope of change control in your organisation. It often includes for example all IT infrastructure, applications, documentation, processes, and supplier relationships.

Note that change control is not the same thing as [**organizational change management**](/insights/change-management), which manages the people aspects of changes.

### 4.2 Manage Incidents

Minimize the negative impact of incidents by restoring normal service operation as quickly as possible. An incident refers to an unplanned interruption to a service, or reduction in the quality of a service. 

It can have remarkable impact on customer/user satisfaction. Ensure that target resolution times are agreed, documented, and communicated. In addition, ensure that sufficient resources are available, and every incident is logged, prioritized, and managed, to ensure efficient resolution. 

Just as important for the customer/user satisfaction is that their expectations are managed, and they are kept up to date on the progress of the incident.

### 4.3 Manage Incident Root Causes

Reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors. 

Problem management activities are closely related to incident management. A problem is a cause, or a potential cause, of one or more incidents. Problems require investigation, analysis, and prioritization. 

When a problem cannot be resolved quickly, it is possible to design a workaround – a solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. If the workaround is not designed to be a permanent way of dealing with the problem, a way to fix the error should be found. 

Error control activities include managing known errors (i.e. problems where initial analysis has been completed) and identification of potential permanent solutions. These, in turn, might result in a change request if they can be justified.

### 4.4 Handle Service Requests

Handle service requests. A service request is a request from a user or other authorized representative which triggers a service action that has been agreed as a normal part of service delivery. 

It can be for example a request for service delivery action, a request for information, a request for provision of a resource, or a request for access to a resource or service. 

Service requests must be handled in an effective and user-friendly manner. Typically, some of them can be fulfilled by automation.

### 4.5 Determine Service Desk Needs

Capture demand for incident resolution and service requests. Service desks provide a single point of contact for users to report issues, queries, and requests. 

They have a major influence on user experience and, therefore, are a vital part of any service operation. The staff require training and competency across several broad technical and business areas. 

More difficult issues require escalation and support from other teams. Hence, support and development teams need to work in close collaboration with the service desk. 

Service desks provide a variety of channels such as phone calls and text messages, service portals and mobile applications, chat, email, social media messaging, and walking service-desks.

### 4.6 Systematically Monitor Services

Systematically monitor services and service components, and record and report selected changes of state identified as events. 

In addition, you need to establish the appropriate response to those events. An event could be any change of state that has significance for the management of a service or other configuration item. Types of events are for example infrastructure, services, business processes, and information security events. 

Monitoring should be performed in a highly automated manner. Note that an event can indicate an issue that qualifies as an incident.

&nbsp;

***
&nbsp;

##### Move up to

- [**Product Life Cycles**](/insights/product-lifecycles)

&nbsp;

##### Sources

1. Axelos (2019). ITIL® Foundation ITIL 4 Edition.