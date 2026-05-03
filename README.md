# AWS-Cloud-Architecture
/*
Project Summary – AWS Cloud Architecture (Toll Calculator System)
Designed and deployed a cloud-native toll calculator application on AWS that allows users to calculate toll costs, travel distance, and estimated time between Pennsylvania Turnpike interchanges. The system is fully hosted in the cloud and built using a scalable, secure, and highly available architecture.

The application integrates serverless APIs, a relational database, and external APIs to deliver real-time results through a globally distributed frontend hosted on AWS CloudFront.

Architecture & Implementation
Engineered a multi-tier architecture within a custom AWS VPC, separating public and private resources to enforce security and scalability. Deployed an Amazon RDS MySQL instance in private subnets with tightly scoped security group rules to prevent direct public access, ensuring secure data handling.

Built a serverless backend using AWS Lambda, exposing functionality through API Gateway endpoints:
Developed a GetToll Lambda to dynamically query toll pricing based on route and payment method
Implemented a GetInterchangeInfo Lambda to retrieve geolocation data from relational tables
Both functions interact with structured datasets initialized via SQL scripts and return optimized JSON responses for frontend consumption.

Frontend & Delivery
Developed a lightweight client-side application (TollCalculator.html) that performs synchronous API orchestration, aggregating multiple backend responses into a unified user output.

Deployed the frontend using Amazon S3 + CloudFront CDN, enabling:
Low-latency global content delivery
High availability and fault tolerance
Production-grade hosting outside of local environments

API Integration (Distributed Data Aggregation)
Extended the system into a multi-API mashup architecture by integrating:
A Distance Matrix API (via Lambda) to compute real-time travel distance and duration
An additional external API to enrich contextual data
Implemented backend API calls to handle CORS limitations, parse JSON responses, and merge third-party data into the application response layer.

Key Technical Highlights
Designed secure VPC architecture with subnet isolation and least-privilege access
Implemented serverless microservices using AWS Lambda + API Gateway
Built relational data layer using Amazon RDS (MySQL) with structured schema design
Orchestrated multi-endpoint API calls and response aggregation on the frontend
Delivered application via CloudFront CDN for global scalability and performance
Applied cloud-native design principles: scalability, high availability, and cost optimization

Impact
This project demonstrates the ability to design and deploy production-style cloud systems, combining infrastructure, backend services, and frontend integration. It highlights strong fundamentals in distributed systems, API design, and secure cloud architecture, aligned with real-world engineering practices.
Key Achievements:

• Deployed multi-tier architecture with secure networking
• Implemented least-privilege IAM policies
• Configured automated monitoring and alerting
*/
