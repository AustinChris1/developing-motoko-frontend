import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Details {
  'age' : bigint,
  'dob' : bigint,
  'owner' : Principal,
  'name' : string,
  'image' : Uint8Array | number[],
}
export type Result = { 'ok' : Details } |
  { 'err' : string };
export type Result_1 = { 'ok' : string } |
  { 'err' : string };
export interface _SERVICE {
  'create' : ActorMethod<[Details], Result_1>,
  'delete' : ActorMethod<[bigint], Result>,
  'me' : ActorMethod<[], Principal>,
  'update' : ActorMethod<[bigint, Details], Result_1>,
  'viewUsers' : ActorMethod<[bigint], Result>,
}
