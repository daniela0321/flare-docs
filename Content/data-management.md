---
title: "Data Management"
author: "Daniela"
created: 2020-11-17
revised: 2021-09-24
time: 13
image: "/images/insights/data-management.jpg"
imageTitle: "Data Management"
excerpt: "In this Insight you can find information on what Data Management is, and what the different domains of Data Management are."
---

## 1. What Is Data Management?

### 1.1 Definition

Data Management is “the development, execution, and supervision of plans, policies, programs, and practices that deliver, control, protect, and enhance the value of data and information assets throughout their lifecycles”. Data and data management are deeply intertwined with IT and IT management: data management requirements must drive IT decisions. [1]

See also how **data management** and **enterprise data architecture** are related. You can read about enterprise data architecture on the [**enterprise architecture**](/insights/enterprise-architecture) Insight.

### 1.2 What Does Data Management Require?

Many organizations recognize that their data is an important enterprise asset (“an economic resource, that can be owned or controlled, and that holds or produces value”), but still only few of them manage it accordingly. Deriving value from data requires intention, planning, coordination, commitment, management, and leadership. In addition, it requires understanding the scope and range of data within an organization. [1]

Data management requires both technical and non-technical skills. Therefore, responsibility for managing data must be shared between business and IT roles, and there must be good collaboration between these areas. [1]

### 1.3 Data, Information, Knowledge and Wisdom

It is good to understand the difference between the terms data, information, knowledge, and wisdom.

These terms are included in the DIKW pyramid (or DIKW hierarchy) which represents structural and/or functional relationships between the terms. However, only limited consensus regarding the terms has been reached. [2]

Below you can see one way to explain them:

- **Data** is conceived of as symbols or signs. It has no meaning or value because it is without context and interpretation.
- **Information** is data that has been shaped into a form that is meaningful and useful.
- **Knowledge** is data and/or information that has been organised and processed to convey understanding, experience, accumulated learning, and expertise.
- **Wisdom** is the ability to act critically or practically in any given situation. It is based on ethical judgement related to an individual’s belief system. [3]

### 1.4 Different Types of Data

Data can be classified by [1]:

- Type of data (e.g. master data)
- Content (e.g. subject areas)
- Format
- The level of protection it requires
- How and where it is stored or accessed. 

### 1.5 The Data Lifecycle and Data Lineage

Just like other assets, data has a lifecycle as well. Data lifecycle includes processes that [1]

- Create or obtain data
- Those that move, transform, and store it and enable it to be maintained and shared
- Those that use or apply it
- Those that dispose of it. 

Data not only has a lifecycle, but it also has lineage. Lineage means “a pathway along which it moves from its point of origin to its point of usage, sometimes called the data chain”). [1]

Lifecycle and lineage intersect. Both need to be understood and planned to effectively manage data assets. [1]

### 1.6 Data Management Frameworks

There are several frameworks that help to understand the data management comprehensively and see relationships between its components. Understanding the wider context of data management helps you to make better decisions about where to focus as you improve practices within and across these functions.

The DAMA-DMBOK Framework [1] defines the different knowledge areas of data management (DAMA Wheel). In addition, the framework includes detail related to people, processes, and technology, and shows the relationship between these three.

The DAMA Wheel has been used as a starting point in the following section on data management domains.

## 2. Data Management Domains

### 2.1 Data Governance

Data Governance is about planning, oversight, and control over management and use of data assets. It is an ongoing function focused on ensuring that an organization gets value from its data and reduces risks related to data.

The Data Governance function guides all other data management functions and aims to ensure that data is managed according to policies and best practices.

### 2.2 Data Handling Ethics

Data Handling Ethics is about how to procure, store, manage, use, and dispose of data in ways that are aligned with ethical principles. Ethics refers to the “principles of behaviour based on ideas of right and wrong”, and “doing it right when no one is looking”.

Establishing acceptable practices for data handling belongs to data governance area, but responsibility extends beyond data governance – handling data ethically requires organization-wide recognition of the risks and organizational commitment to ethical data handling.

### 2.3 Data Quality

Data Quality Management is about planning, implementation, and control activities that apply quality management techniques to data.

All Data Management domains contribute to the quality of data.

### 2.4 Data Management and Change Management

It is important to understand, that for most organizations, improving data management practices requires changing how people work, how they understand the role of data in their organizations, and the way they used data and deploy technology. 

This can be achieved only through a careful and structured approach to the [**change management**](/insights/change-management) in the organization.

### 2.5 Data Management Maturity Assessment

Maturity models help an organization to evaluate its level of maturity and improve its capabilities.

A Data Management Maturity Assessment can be used to evaluate Data Management overall, a single Data Management domain, or even a single process.

### 2.6 Data Architecture

In the systems and software engineering context [**architecture**](/insights/enterprise-architecture) refers to “the fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles governing its design and evolution”. [4]

Architecture is carried out at different levels within an organization (e.g. enterprise, domain, project) and with different areas of focus (infrastructure, application, and data).

**Data Architecture** presents the overall structure of data and data-related resources. It represents organizational data at different levels of abstraction so that it can be understood also by non-technical people.

Data Architecture artifacts include specifications used to describe existing state, define data requirements, guide data integration, and control data assets. The most detailed Data Architecture design document is a formal enterprise *data model*.

### 2.7 Data Modelling and Design

Data Modelling is the process of discovering, analysing, representing, and communicating data requirements in a precise form called the *data model*.

A data model “describes an organization’s data as the organization understand it, or as the organization wants it to be”. It also includes Metadata essential to data consumers.

There are multiple different schemes used to represent data, for example Relational, Dimensional, Object-Oriented, Fact-Based, Time-Based, and NoSQL.

Models of these schemes exist at three levels of detail: conceptual (represents the high-level data requirements), logical (represents detailed data requirements), and physical (represents a detailed technical solution).

### 2.8 Data Storage and Operations

Data Storage and Operations include the design, implementation, and support of stored data, specifically structured data assets.

### 2.9 Data Integration and Interoperability

Data Integration and Interoperability is about managing the movement and consolidation of data within and between data stores, applications, and organizations.

### 2.10 Data Security

Data Security includes the planning, development and execution of security policies and procedures. The specifics of data security differ between countries and industries.

### 2.11 Document and Content Management

Document and Content Management includes controlling the capture, storage, access, and use of data and information stored outside relational databases. It is about planning, implementation, and control activities used to manage the lifecycle of this data and information.

### 2.12 Reference and Master Data

Reference and Master Data is about data that is required across business areas, processes, and systems. Customer data and product data are examples of master data, location codes and cost center codes are examples of reference data.

Reference and Master Data Management reduces inconsistencies in data structure and data values between systems – the goal is to enable consistent use of the most accurate, timely, and relevant version of truth about the data.

### 2.13 Metadata

A common definition for Metadata is that it is “data about data”, but this is a misleadingly simple definition. 

Metadata includes information about technical and business processes, data rules and constraints, and logical and physical data structures. In addition, it describes the data itself, the concepts the data represents, and the connections between the data and concepts.

Metadata Management is about planning, implementation, and control activities of this type of data.

### 2.14 Data Warehousing and Business Intelligence

Data Warehousing and Business Intelligence is about planning, implementation, and control processes to provide decision support data. It supports knowledge workers engaged in reporting, query, and analysis.

### 2.15 Big Data and Data Science

Big Data refers to the volume of data, variety of data, and the speed at which it is produced. Data Science merges data mining, statistical analysis, and machine learning with data integration and data modelling capabilities, to build predictive models.

Traditional Business Intelligence provides analysis of structured data to describe past trends. As Big Data has been brought into Data Warehousing and Business Intelligence environments, Data Science techniques are used to provide a forward-looking view.

&nbsp;

***
&nbsp;

##### Move up to

- [**Enterprise Architecture**](/insights/enterprise-architecture)

&nbsp;

##### Sources

1. DAMA International (2017). DAMA-DMBOK: Data Management Body of Knowledge: 2nd Edition Second Edition. Technics Publications.
2. Baskarada, Sasa and Koronios, Andy (2013). Data, Information, Knowledge, Wisdom (DIKW): A Semiotic Theoretical and Empirical Exploration of the Hierarchy and its Quality Dimension. Australasian Journal of Information Systems.
3. Jashapara, A. (2005). Knowledge Management: An Integrated Approach, Harlow, FT Prentice Hall.
4. ISO (2011). [ISO/IEC 42010:2007 Systems and Software Engineering – Architecture Description](https://www.iso.org/standard/45991.html).