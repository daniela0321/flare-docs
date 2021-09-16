---
title: "Requirements Development"
author: "Daniela"
created: "July 13, 2020"
revised: "September 5, 2021"
time: "13 min"
image: "/images/insights/requirements-development.jpg"
imageTitle: "Requirements Development"
excerpt: "In this Insight you can find information on what a requirement is, what requirements development means, what types of requirements there are, and what the process for requirements development is. [1, 2]"
---

## 1. What Is a Requirement?

A requirement is a need that a particular design, product or process aims to satisfy.

A good requirement is complete and fully records the stakeholders’ needs in a consistent, understandable, and unambiguous way.

### 1.1 Levels and Types of Requirements

There are many different types of requirements ranging from high level business requirements down to detailed technical system requirements. There are also types based on the source of the requirement (e.g. stakeholder requirements) or the location in the process (e.g. transition requirements).

- **Business requirements**. High-level requirements that express the objectives and desired outcomes of an organization. Typically defined in a business case (a document that captures the justification for undertaking the project or program) or other statements.
- **Functional (solution) requirements**. The bridge between the business and technical teams. Provides the definition of what the system must do. Typically defined using user stories (a description of a system feature from an end-user perspective) or use cases (typically a list of actions or event steps illustrating the interactions between a user and a system).
- **Content requirements**. A description of the various content elements that will be required: images, audio, video etc. Lists appropriate content and defines content format, purpose, and content size. It is important to identify both content sources and inappropriate content as early as possible. You also need sufficient resources to produce, edit, approve, manage, and update the content.
- **Stakeholder requirements**. A stakeholder is a party that has an interest in the product and can either affect or be affected by it. Stakeholder requirements refer to statements of the stakeholders’ needs and expectations. They describe the features that must be met if the business requirements are to be fulfilled.
- **Non-functional (quality-of-service) requirements**. System properties and constraints. These can be product related (e.g. reliability, response time, storage requirements), organisation related (e.g. standard requirements) or external (e.g. ethical and legislative requirements). The difference between functional and non-functional requirements can sometimes be blurry.
- **Transition requirements**. What is needed to transform the business and systems from the current state (when the system has been fully implemented) to the future state. E.g. training or conversion and reformatting of data.
- **System requirements**. More detailed specifications of requirements which may be expressed as an abstract model of the system. E.g. data-flow diagrams and object class hierarchies. These models should always be accompanied by natural language descriptions.

## 2. What Is Requirements Development?

### 2.1 Activities and tasks

Requirements development (or requirements engineering) includes all the activities and tasks associated with generating, evaluating, recording, documenting, and validating the requirements for a project.

Requirements development is one of the most critical disciplines in the solution development lifecycle as it sets the foundation for a successful project or program. It should always ensure that great value is delivered to the users and other stakeholders.

There can be a lot of people involved in the development or management of requirements – at a strategic level, a business value level, and a system development level. For example, strategic thinkers, clients, analysts, architects, managers, designers, developers, testers, and maintenance engineers are often roles included in the process.

The problems of requirements development increase exponentially with the size of the system. There is a wide range of tools, techniques, and standards you can use to make this process easier.

### 2.2 Agile Requirement Processes

The term [**agile**](/insights/agile-software-development) refers to a group of software development methods that are iterative and focus on early development and delivery using customer and developer collaboration. There are a variety of agile methods that have become predominant for developing particular types of systems. Note that the use of agile processes impact the requirements development process described below.

## 3. The Process of Requirements Development

### 3.1 Requirements Generation

Requirements generation is the process of discovering information which will form the precursors to requirements. At this point the information is typically raw and often heterogeneous. Requirements generation can take many forms. Always decide case by case which documents, tools, people and processes are needed.

Locations of requirements information:

- **Users and stakeholders**. Information can be gathered e.g. through interviews, workshops, surveys, brainstorming, observations of users performing tasks, data mining, or information available online. You need to understand how the stakeholders define success in this case. Try to understand what the users like, what they do not like, what their typical processes and motivations are. When trying to understand the stakeholders and their needs, the challenge is that they do not always know exactly what they need. You always need to balance between things stakeholders say they need, things they actually need, and things they do not know they need.
- **Documentation reviews**. E.g. business documents like business case, vision, concept of operation, or procedure manuals and user task lists.
- **Competitors**. Analyse the market leader’s or competitor’s products. What are they doing well and in what areas are they performing poorly? This might give you ideas on problems you can solve and what features are important.
- **Existing product audit**. Audit an existing product if there is one. Current system issues, and enhancement requests for the existing system. Also talk to the stakeholders and users about it. Try to understand what good and what bad they see in it, and how it could be better.

### 3.2 Requirements Analysis & Negotiation

The analysis phase ensures that the requirements generated in earlier in the process

- Have been articulated correctly.
- Have the correct format, level of detail and properties.
- Form a cohesive and correct set.

For example, it is quite common to find repeated or overlapping requirements or notice omitted concerns of one or more stakeholders.

When information from this analysis is available, system stakeholders can negotiate to agree on a set of system requirements. Conflicts must be resolved, and requirements prioritised.

**Prioritizing requirements**

Prioritization of requirements is a decision process that allocates a priority to each requirement. Commonly used criteria used here is business value. Other factors impacting prioritization can be e.g. regulatory compliance, urgency, or business or technical risk. To evaluate a specific requirement, you need to ask yourself

- Does the requirement fulfil both a user need and a business objective?
- Are you able build it affordably?
- Are you able to sell it?
- Are there potential conflicts between requirements?

### 3.3 Requirements Documentation

**Requirements Specification**

There are a number of documents that can be produced as part of the requirements development discipline. You can use standard or customized templates to make this phase easier.

Requirements specification involves representing and storing the knowledge about the generated requirements in a persistent and well-organized fashion. It facilitates effective communication and change management. It helps to build a common understanding of the goals.

**Documentation style**

There is no best way to write requirements – it depends for example on organisational practice and readers of the requirements.

- **Language type**. Requirements are usually stated in a language which reflects the background of the requirement source. If the source is an engineer, it may be written in engineering terms. If the source is a businessperson, it will be written in natural language.
- **Diagrams**. Often requirements are written as natural language supplemented with diagrams and more detailed information. As diagrams provide a powerful means of communication, they are often the preferred method viewing the contents for many stakeholders.
- **Itemization**. Requirements should always be itemized – in this way it is easier to validate if a requirement has been met, and understand the overall level of progression in meeting the requirements.
- **Traceability**. Each requirement should be assigned a unique identifier or reference number to ensure traceability. In this way it is easy to refer to that requirement in other parts of the requirements document or in other system documentation.
- **The level of detail**. There is no simple answer on how detailed the requirements should be. The level of detail depends for example on the normal practice in your organization, and the type of system which is being developed. In addition, if you are developing a product which you both specify and implement, a fairly general specification might be sufficient (and vice versa).

### 3.4 Requirements Verification & Validation

Requirements validation is needed to make sure the requirements are of high standard, appropriately define the customer’s problem (or opportunity), and are sufficient to design and implement the product. Requirements can be validated in many ways – for example performing team reviews and assigning test cases to the requirements.

Arrange a formal sign-off if necessary. Requirements sign-offs are an indication that stakeholders agree with and approve the documented requirements.

### 3.5 Requirements Management

Requirements management is a process which supports the other requirements development activities and is carried out in parallel with them. Principal concerns of requirements management are:

- Managing changes to agreed requirements.
- Managing the relationships between requirements.
- Managing dependencies between the requirements document and other documents produced during the process.

It will be inevitable that requirements change during a project, so most requirement management processes have some type of mechanisms to cope with these changes. Any subsequent changes are specified as change requests.

&nbsp;

***
&nbsp;

##### Move up to

- [**Product Life Cycles**](/insights/product-lifecycles)

&nbsp;

##### Sources

1. Sparx Systems & Maguire, Stephen (2016). Requirements Engineering Book.
2. Sommerville, Ian and Sawyer, Pete (2003). Requirements Engineering – A Good Practice Guide. England, John Wiley & Sons Ltd.