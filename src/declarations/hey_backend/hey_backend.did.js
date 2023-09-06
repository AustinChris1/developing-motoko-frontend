export const idlFactory = ({ IDL }) => {
  const Details = IDL.Record({
    'age' : IDL.Int,
    'dob' : IDL.Int,
    'owner' : IDL.Principal,
    'name' : IDL.Text,
    'image' : IDL.Vec(IDL.Nat8),
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : Details, 'err' : IDL.Text });
  return IDL.Service({
    'create' : IDL.Func([Details], [Result_1], []),
    'delete' : IDL.Func([IDL.Nat], [Result], []),
    'me' : IDL.Func([], [IDL.Principal], ['query']),
    'update' : IDL.Func([IDL.Nat, Details], [Result_1], []),
    'viewUsers' : IDL.Func([IDL.Nat], [Result], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
