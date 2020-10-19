# Migration `20201019090706-create-data`

This migration has been generated at 10/19/2020, 11:07:06 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Owls" DROP COLUMN "input"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201015222448-owls-test..20201019090706-create-data
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
@@ -14,6 +14,5 @@
   id        Int      @id @default(autoincrement())
   createdAt DateTime @default(now())
   latitude  Float
   longitude Float
-  input     String
 }
```


