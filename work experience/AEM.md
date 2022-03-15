1.安装好 java，maven，aem； 2.启动 aem；在 aem 包所处文件夹位置执行命令 java -jar aem-author-p4502.jar
并访问 http://localhost:4502/ 以账号密码 admin 登录即可。 3.创建 project
mvn -B archetype:generate \
 -D archetypeGroupId=com.adobe.aem \
 -D archetypeArtifactId=aem-project-archetype \
 -D archetypeVersion=33 \
 -D appTitle="WKND SPA React" \
 -D appId="wknd-spa-react" \
 -D artifactId="aem-guides-wknd-spa.react" \
 -D groupId="com.adobe.aem.guides.wkndspa.react" \
 -D frontendModule="react" \
 -D aemVersion="cloud"

shit
