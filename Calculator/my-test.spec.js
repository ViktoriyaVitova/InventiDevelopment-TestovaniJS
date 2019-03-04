import test from "ava";
import axios from "axios";
import { plus } from "./JS";

test("plus function works with simple numbers", t => {
  t.is(plus(2, 2), 4);
});

test("users endpoint returns 200", async t => {
  const response = await axios.get("http://localhost:3000/users");

  t.is(response.status, 200);
});

test("users endpoint returns array", async t => {
  const response = await axios.get("http://localhost:3000/users");

  t.true(Array.isArray(response.data));
});

test("users endpoint returns objects with correct stucture", async t => {
  const response = await axios.get("http://localhost:3000/users");

  const firstUser = response.data[0];

  t.true(firstUser.id > 0);
  t.truthy(firstUser.firstName);
  t.truthy(firstUser.lastName);
  t.truthy(firstUser.email);
  t.truthy(firstUser.age);
  t.truthy(firstUser.companyId);
});
