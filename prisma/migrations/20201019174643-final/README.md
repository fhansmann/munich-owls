# Migration `20201019174643-final`

This migration has been generated at 10/19/2020, 7:46:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Owls" ALTER COLUMN "description" DROP DEFAULT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201019092155-description..20201019174643-final
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
@@ -14,6 +14,6 @@
   id          Int      @id @default(autoincrement())
   createdAt   DateTime @default(now())
   latitude    Float
   longitude   Float
-  description String   @default("test")
+  description String
 }
```


