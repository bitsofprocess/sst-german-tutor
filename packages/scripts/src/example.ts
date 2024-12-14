import { Resource } from "sst";
import { Example } from "@german-tutor/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
