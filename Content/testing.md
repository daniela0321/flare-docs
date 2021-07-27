---
title: "Testing"
author: "Daniela"
created: "October 20, 2020"
revised: "July 27, 2021"
time: "13 min"
image: "/images/insights/201020-testing.jpg"
imageTitle: "Software Testing"
excerpt: "In this Insight you find information on what software testing is, what the goal of testing is, what software testing methods there are, how a generic testing process looks like, and when to use test automation."
---

## 1. What Is Software Testing?

Software testing is used to verify that the implementation matches the requirements of the system and the expectations of the stakeholders. The goal is to assure the quality of the final product. [1]

Thus, software testing contributes to improvement of software quality. However, software quality is more than just elimination of defects (or ‘bugs’) – it includes functionality, reliability, usability, efficiency, maintainability, and portability. [2] Testing must consider all these factors to judge the overall quality of a software product.

Testers should be involved in earlier stages i.e. right from requirement gathering phase. This will help finding the defects in early stage of development, thus bringing down the cost of fixing them. [3]

## 2. No Large Software Is Defect Free

Even if all the executed test cases are successful, you cannot safely conclude (except for very small software) that there are no further defects. Testing can show that the software has defects, but it cannot prove the software is defect free. To prove the absence of defects, a test would need to execute a software in every possible situation, with every possible input value, and with all possible conditions. In practice, this is not possible. [4]

However, defects that are not found during testing could cause high costs, or even endanger the lives and health of people, when the software is used. Since a full test is not possible, test intensity and test extent must be defined depending on risk. Systems with high risks must always be tested more thoroughly. The risk assessment must be done for the individual system parts, or even for single error possibilities. [4]

In addition, proper communication channels with stakeholders must be established to ensure everybody is on the same page in terms of expectations and test output. This will also ensure that testing is aligned with the organizational priorities. [3]

## 3. Software Testing Methods and Naming Tests

### 3.1 Software Testing Methods

Software testing methods are traditionally divided into two categories which complement each other. These are: [1]

- **Black-box testing**. Treats the software as a black box, focusing only on inputs and outputs. In other words, the internal structure/design/implementation of the item being tested is NOT known to the tester.
- **White-box testing**. The internal structure/design/implementation of the item being tested is known to the tester and he/she uses this knowledge when testing the system.

### 3.2 Naming Tests

When going in to more details, there are a lot of confusing terms for different kinds of software tests. Tests are named in different ways: [4]

- **Test objective or test type** (e.g. load test)
- **Test technique** (e.g. business-process-based test)
- **Test object** (e.g. database test)
- **Test level**, i.e. a test is named after the level of the life cycle model (see below)
- **Test person** (e.g. user acceptance test)
- **Test extent** (e.g. partial regression test)

Due to the vast amount of approaches, only one of these is covered in this Insight. Below you can see the list of different test levels.

**Test Levels**

Different testing levels state where in the lifecycle a particular test takes place, and what kind of test is being performed. There are five distinct levels of testing: [1]

- **Unit testing**. White-box testing which verifies the functionality of a small unit of code. For example, it can assess if a method returns the correct value. Unit testing is often done by the developer who wrote the code.
- **Integration testing**. Assesses the communication between software components. It can be performed incrementally as the components are being developed, or it can be performed when all the components are ready to work together. Integration testing can also involve testing the component’s integration with an external system if there is one.
- **System testing**. Overall testing of the software system when all the system components are developed and working together and with any external systems.
- **Acceptance testing**. Often performed by the customers themselves. Typically, there are two levels of acceptance testing prior to broad release of a product. **1) Alpha testing**: performed by a limited group of users and the product is not typically ready yet. For example, it can miss some features. **2) Beta testing**: the product is released to a wider audience of customers and the product is very close to the final release.
- **Regression testing**. As the defects in an application are reported and fixed, software testers usually run regression tests to make sure the new fix did not break anything that was previously working.

## 4. Test Process Is Dependent on the Product Life Cycle Model

What the exact test process is, depends on the [**product life cycle**](/insights/product-lifecycles) model. Testing must be adapted to the model being used. Testing appears in each of different life cycle models, but with very different meanings and to different extent. [4]

Most of the testing in [**agile**](/insights/agile-software-development) is carried out as a continuous process, not a discrete stage later in the development cycle. Therefore, the testing strategy needs to be clearly understood right from the beginning. [5]

## 5. The Fundamental Test Process

Below you can see a list of tasks you might be required to take in a test process. Although the test process activities are illustrated sequentially in the image above, these may overlap or take place concurrently. As mentioned above, the test activities need to be adjusted to the individual needs of each project. [4]

### 5.1 Test Planning and Control

- Plan resources (people, time, equipment, utilities etc.).
- Determine the test strategy or approach.
- Define test intensity for subsystems and different aspects.
- Prioritize tests.
- Select and acquire necessary tools.

You can use for example the [**ISO standard template**](https://www.iso.org/standard/56737.html) as a guide to prepare a test plan. [6] Remember to check, update, and adjust the plan on a regular basis.

### 5.2 Test Analysis and Design

- Review the specification of what should be tested (the specification should be clear enough to develop test cases).
- Check testability of test objects.
- Consider the risk when defining which test techniques shall be used.
- Ensure traceability between the specifications and the tests.
- Define logical test cases (i.e. describing in logical terms the circumstances in which the system behaviour is examined).
- Supplement test cases with 1) preconditions and 2) expected results and behaviours.
- In parallel to the test case specification, decide and prepare the test infrastructure and the necessary environment to execute the tests.

### 5.3 Test Implementation and Execution

- Transform logical test cases into concrete test cases (meaning the actual inputs are selected) and describe how the tests will be executed. Test data could be any kind of input for the application, for example a file loaded by the application or entries read from the database tables. Preparing proper test data is essential for effective testing.
- Set up all the details of the environment (test infrastructure and test framework).
- Group test cases into test scenarios (whereby the result of one test case is used as the starting point for the next test case).
- Program, build, acquire, or set up as part of the test environment if necessary: automated test frameworks, drivers, simulators etc.
- Execute test cases. Consider the priority of test cases, log tests exactly and completely (who tested which parts, when, how intensively, with what results), and make sure that it is possible to easily repeat the test later with the same input data and conditions if necessary. After logging any defect (or ‘bug’), development has the responsibility to resolve it.
- Re-execute tests and/or regression tests after the defects are corrected.

### 5.4 Test Evaluation and Reporting

- Assess the test object against the set test exit criteria specified during planning.
- Terminate the tests or run additional test cases / test cycles if necessary.
- Write test summary report for the stakeholders.

### 5.5 Test Closure Activities

- Analyse and make available the experience gathered during the test work. This will be very useful for future projects and enable continuous process improvement.
- Archive testware (test cases, test logs, test infrastructure, tools, etc.). A major part of the test effort during maintenance can be avoided if the testware is still available.

## 6. Test Automation

Test automation refers to 
1. The use of software tools to design or program test cases with the goal to be able to execute them repeatedly by computer, and to 
2. The support of any test activities by using software tools. [4]

Before making the decision to automate testing you need to make sure it is the best fit for your needs. Both manual and automation testing have their own limitations. Try to find a middle way to benefit from the best of both worlds. There are situations when it is especially beneficial to consider test automation, for example: [3]

- Regression testing (testing that new fixes have not introduced any new defects) takes a lot of time.
- Performance, load, and stress testing work.
- Graphical user interface (GUI) testing when there is almost the same GUI but a lot of frequent functional changes.

Before automating testing, you need to consider for example the following things: [3]

- Do you have the required skilled resources with technical capabilities?
- Initial cost for automation tool, resources training, and test script maintenance should be smaller than the benefit you will get.
- Tests that run only once should not be automated.
- Is your application stable enough to automate?
- Complete test automation is practically impossible – manual intervention is necessary for application areas like user interface, documentation, installation, compatibility, acceptance and recovery testing.

&nbsp;

***
&nbsp;

##### Move up to

[**Product Life Cycles**](/insights/product-lifecycles)

&nbsp;

##### Sources

1. Microsoft (2012). Software Development Fundamentals.
2. International Organization for Standardization. [ISO/IEC Standard 9126-1](https://www.iso.org/standard/22749.html).  
3. Shinde, Vijay (2014). Software Testing Career Package: A Software Tester’s Journey from Getting a Job to Becoming a Test Leader!
4. Spillner, Andreas; Linz, Tilo; Schaefer, Hans (2014). Software Testing Foundations (4th Edition).
5. Heuer, Florian (2015). Agile Testing: An Overview.
6. International Organization for Standardization. [ISO/IEC/IEEE 29119-3:2013, Part 3: Test documentation](https://www.iso.org/standard/56737.html). 