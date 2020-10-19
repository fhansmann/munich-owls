# Migration `20201015222448-owls-test`

This migration has been generated at 10/16/2020, 12:24:48 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Owls" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"latitude" Decimal(65,30)   NOT NULL ,
"longitude" Decimal(65,30)   NOT NULL ,
"input" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200922113652-owls..20201015222448-owls-test
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -14,5 +14,6 @@
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   latitude  Float
   longitude Float
+  input     String
 }
```


