# Services
### Buttress
* Provides application support for the different services in our system

### Alfred
* Alfred is a public API as opposed to hulk which is client centric, it provides access to users, accounts, budgets, categories, members, institutions, etc

### Newman
* Newman delivers mail and other channel-based notifications

### Abacus
* Accounts, Transactions, Budgets, Categories, Spending, Guide states
* Account & Transaction matching/de-duping
* Transaction auto-categorization

### Ballista
* Owning Service for the entire data warehouse
* Was created for insight and target/longbow, also used for batcave when we do analysis
* core services publish data that Ballista picks up that we can use for an analytics tool
* whenever a core service writes a new instance of one of their objects (such as an account) they send a copy of that account as a Protobuf message to RabbitMQ


##### Note
Core Service = anything that has a Postgres DB (Abacus, Amigo, Dispatch, Newman, Persona, Sherlock)
