#!/usr/bin/env node
const n=new(await import("commander")).Command().name("Maintain").description("\u{1F527} Maintains GitHub repositories.").version("0.0.13");(await import("../Variable/Command.js")).default?.forEach(({Action:o,Name:e,Description:a,Arguments:i})=>{const r=n.command(e).description(typeof a<"u"?a:"").action(o);i?.forEach(({Name:t,Description:s})=>r.argument(t,s))});var m=n.parse();export{m as default};
