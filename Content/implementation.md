---
title: "Implementation"
author: "Daniela"
created: "October 13, 2020"
revised: "July 27, 2021"
time: "7 min"
image: "/images/insights/210805-implementation.jpg"
imageTitle: "Implementation"
excerpt: "In this Insight you find information on the tasks related to technical design, software development, and infrastructure and platform management."
---

Note that the service transition activities are included in the [**Service Transition and Operation**](/insights/service-transition-and-operation) Insight.

## 1. Types of Software

There are three types of software:

- **Ready for use software** (e.g. email software).
- **Module based software** that requires configuration or additional programming.
- **Custom software**. Built based on the customer’s requirements.

This Insight is relevant when building custom software or using software that requires additional programming.

## 2. Technical Design

A pre-requisite for the implementation is that also the more detailed technical design is in place. This can have several names, e.g. system design, technical design, or technical specification. A big part of this phase is designing the software architecture.

Software architecture is the representation of an integrated software product and provides the foundation for software implementation. The primary intent of software product architecture is to describe the way in which functions are assigned to physical elements and how they interact. [1]

Read more about architectural design and documentation on the [**Enterprise Architecture**](/insights/enterprise-architecture) Insight.

## 3. Software Development

### 3.1 Software Development Tasks

Software development can be divided in three main phases: [1]

1. **Building and testing the software units**. Software implementation starts with a series of technical tasks: preparing the unit designs, source code editing or programming, testing of each software unit, and conducting peer reviews in different phases. The result of this phase should be a documented unit of source code that has been tested against its structural unit specification.
2. **Component integration and testing**. The source code (software unit) can then be assembled, integrated, and compiled with other software elements to craft larger software components. These integrated software components are tested against structural component specifications. This process of assembly, integration, and testing continues until a completely integrated and tested software configuration item is realized and available for acceptance testing.
3. **Acceptance testing dry-run**. Software implementation includes the dry-run of the software acceptance testing. This provides a demonstration of the software product’s readiness for acceptance testing. Acceptance testing, in turn, represents a formal demonstration to stakeholders that the software development effort has achieved its objectives. When the tests are successful, the software product is deemed to be ready for distribution and post-development sustainment.

You can read more about the testing process from the [**Testing**](/insights/testing) Insight.

### 3.2 Development Principles

Some essential software development principles are: [2]

- **Code reuse**. Code reuse means using existing software to build a new software. This can mean for example using software libraries, frameworks, code generators, previous versions, etc.
- **Don’t Repeat Yourself (DRY)**. Duplicate information, process, and behaviour should be reduced at every aspect of software development. Instead, refer to a single source. This principle can be applied in databases, documentation, build, and tests.
- **Proudly Found Elsewhere (PFE)**. This principle encourages to use 3rd party software, especially open source, instead of writing in-house and custom solution.
- **Cathedral and the Bazaar (CatB)**. The CatB refers to two software models: 1) The Cathedral model releases source code to exclusive, limited group of developers 2) The Bazaar model releases source code to the public. The latter is central to the open-source community – the more eyes looking at the software, the more bugs will be found and fixed.
- **Principle of Good Enough (POGE)**. This principle favours quick-and-simple solution over complex and elaborate solutions. Once the solution is deployed, it is evolved by end-user requirements.
- **Worse is better**. This principle refers to the claim that quality does not necessarily increase with functionality – there is a point where less functionality (‘worse’) is better in terms of practicality and usability.

## 4. Infrastructure and Platform Management

IT infrastructure refers to the physical and/or virtual technology resources that provide the environments needed to deliver IT services: servers, storage, networks, client hardware, middleware, and operating systems software, etc. It includes any resource a customer uses to access the service or consume a product. It can also include the buildings and facilities an organization uses to run its IT infrastructure. [3]

IT infrastructure may be managed by the organization itself or by an external supplier. A common way for an external supplier to provide these services is through the cloud. Cloud service models can include: [4]

- **Software as a Service (SaaS)**. SaaS platforms make software available to users over the internet. You do not need to install and run software applications on your computer (or any computer). The software is fully managed by the service provider.
- **Platform as a Service (PaaS)**. PaaS vendors provide hardware and software tools over the internet, and people use these tools to develop applications. In other words, PaaS vendors provide developers with a framework they can use to build custom applications upon.
- **Infrastructure as a Service (IaaS)**. IaaS businesses offer services such as pay-as-you-go storage, networking, and virtualization. IaaS clients can control their own data infrastructure without having to physically manage it on-site.

&nbsp;

***
&nbsp;

##### Move up to

[**Product Life Cycles**](/insights/product-lifecycles)

&nbsp;

##### Sources

1. Schmidt, Richard F. (2013). Software Enginering: Architecture-Driven Software Development. Elsevier Inc.
2. Barbin, Ludwin (2013). Software Design Principles.
3. Axelos (2019). ITIL® Foundation ITIL 4 Edition.
4. BigCommerce Pty. Ltd. [IaaS vs PaaS vs SaaS Enter the Ecommerce Vernacular…](https://www.bigcommerce.com/blog/saas-vs-paas-vs-iaas/#the-three-types-of-cloud-computing-service-models-explained). Retrieved 21 October 2020.