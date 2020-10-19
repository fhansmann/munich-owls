# Migration `20201019092155-description`

This migration has been generated at 10/19/2020, 11:21:55 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Owls" ADD COLUMN "description" text   NOT NULL DEFAULT E'test'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201019090706-create-data..20201019092155-description
--- datamodel.dml
+++ datamodel.dml
@@ -2,17 +2,18 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model Owls {
-  id        Int      @id @default(autoincrement())
-  createdAt DateTime @default(now())
-  latitude  Float
-  longitude Float
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  latitude    Float
+  longitude   Float
+  description String   @default("test")
 }
```


