data = require('./data.json');

for (profile of data) {
  const id = `${profile.first_name} ${profile.last_name}`
  const profilePicURL = profile.profile_pic_url
  const username = `${profile.first_name} ${profile.last_name}`

  const timeStamp = new Date();


  let storyArr= []

  for (let story of profile.stories) {
    const id = story.id.toString()
    const type= "photo"
    const length = 3
    const src = story.image
    const preview = story.image
    const link = "/"
    const linkText = story.description
    const time = "2"
    const seen = false
    storyArr.push([id, type, length, src, preview, link, linkText, time, seen])
  }
  buildTimelineItem(id, profilePicURL, username, timeStamp, storyArr)
}


function buildTimelineItem(...args) {
  console.log("my",...args)
}
