const w=require('web-push');
w.setVapidDetails('https://beauagrawal01.github.io/instagram_demo/','BEiSjyYho7VFpriDmLNPXN1YA1eSmZ2xf_9EndrOOJFbBg8JbK42OUb-ZVuW9nURshZyd9y2Fu9YCVqoTDgE67w',process.env.VAPID_PRIVATE_KEY);
w.sendNotification(JSON.parse(process.env.PUSH_SUBSCRIPTION),JSON.stringify({title:process.env.MESSAGE,u:'eli'}),{TTL:120,urgency:'high'})
.then(r=>console.log('Sent, status',r.statusCode))
.catch(e=>{console.error('Failed',e.statusCode,e.body);process.exit(1)});
