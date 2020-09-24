# Migration `20200922113652-owls`

This migration has been generated at 9/22/2020, 1:36:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Owls" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"latitude" Decimal(65,30)   NOT NULL ,
"longitude" Decimal(65,30)   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200922113652-owls
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
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
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  latitude  Float
+  longitude Float
+}
```


