var f=async(w=[])=>{const c=await e(`GET /users/${i}/repos`);if(c)for(const o of c.data)t.Repositories.push({Owner:i,Name:o.name});const p=await e(`GET /users/${i}/orgs`);if(p)for(const o of p.data){t.Organizations.push({Name:o.login});const s=await e(`GET /orgs/${o.login}/repos`);if(s)for(const n of s.data)t.Repositories.push({Owner:o.login,Name:n.name})}let r=null;for(const o of t.Repositories){for(const s of w)o.Name===s?r=!0:r=!1;if(r===null||r){const s=await e(`GET /repos/${o.Owner}/${o.Name}/actions/runs`,{owner:o.Owner,repo:o.Name});if(s?.data?.workflow_runs)for(const a of s.data.workflow_runs)await e(`DELETE /repos/${o.Owner}/${o.Name}/actions/runs/${a.id}`,{owner:o.Owner,repo:o.Name,run_id:a.id}),await e(`DELETE /repos/${o.Owner}/${o.Name}/actions/runs/${a.id}/logs`,{owner:o.Owner,repo:o.Name,run_id:a.id});const n=await e(`GET /repos/${o.Owner}/${o.Name}/actions/caches`,{owner:o.Owner,repo:o.Name});if(n?.data?.actions_caches)for(const a of n.data.actions_caches)await e(`DELETE /repos/${o.Owner}/${o.Name}/actions/caches/${a.id}`,{owner:o.Owner,repo:o.Name,cache_id:a.id})}}};const{default:e}=await import("../Function/Request.js"),i=(await import("../Variable/Environment.js")).default.parse(process.env).User,t={Organizations:[],Repositories:[]};export{t as All,e as Request,i as User,f as default};
