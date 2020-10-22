# Migration `20201022071557-data-entries`

This migration has been generated at 10/22/2020, 9:15:57 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Owls" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"latitude" Decimal(65,30)   NOT NULL ,
"longitude" Decimal(65,30)   NOT NULL ,
"description" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201022071557-data-entries
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Owls {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  latitude    Float
+  longitude   Float
+  description String
+}
```


