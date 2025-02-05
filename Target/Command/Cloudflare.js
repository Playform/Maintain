var p=async()=>await(async s=>{for(const{Path:o,Name:i,File:n}of s)for(const[t,w]of await(await import("@Function/Directory.js")).default(await(await import("@Function/Package.js")).default("Cloudflare"))){const e=`${t}/.github`,r=await n();if(o==="/workflows/"&&i==="Cloudflare.yml")for(const a of w){const f=(await import("path")).dirname(a).replace(t,""),l=(await(await import("@Function/Type.js")).default()).get(a.split("/").pop());typeof l<"u"&&l==="Cloudflare"&&r.add(`
            - uses: cloudflare/wrangler-action@v3.13.0
              with:
                  apiToken: \${{ secrets.CF_API_TOKEN }}
                  accountId: \${{ secrets.CF_ACCOUNT_ID }}
                  workingDirectory: .${f}
`)}let c="main";try{await(await import("fs/promises")).access(t,(await import("fs/promises")).constants.F_OK);const a=process.cwd();process.chdir(t),c=(await import("child_process")).execSync("git rev-parse --abbrev-ref HEAD").toString().trim(),process.chdir(a)}catch{console.log(`Could not access: ${t}`)}if(r.size>1){try{await(await import("fs/promises")).mkdir(`${e}${o}`,{recursive:!0})}catch{console.log(`Could not create: ${e}${o}`)}try{await(await import("fs/promises")).writeFile(`${e}${o}${i}`,`${[...r].join("")}`.replaceAll("$Branch$",c))}catch{console.log(`Could not create workflow for: ${e}/workflows/Cloudflare.yml`)}}}})((await import("@Variable/Cloudflare.js")).default);export{p as default};
