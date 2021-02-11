# Testing

Go to https://autofi-feed.podsoft.io

# Purpose

This purpose of this react project is to display a list of posts in a feed to promote the company social network activity.

# Assumptions

For demo purposes, we are making several assumptions:

- Data coming form the API(s), both posts and comments, contain valid data
- No one is trying to sneak malicious posts or comments into our system
- `\n` is used to imply that there's supposed to be a new line
- The size of posts/comments will not be extrememly large such that it breaks the browser or causes an unpleasant experience for the user
- The user or person testing is using a modern brower on a modern computer or modern phone/device
- For commenting, the site already has current user's name and email, so all the user needs to do it type a comment and press enter/post

# Design decisions

In a real life scenario, we'd probably not want to store all posts and comments on the browser. We may want to only fetch and render posts that the user sees (or about to see) on the screen. It may be a better approach to fetch comments (by postId) as the user clicks on a post or clicks "x comments".

For demo purposes, we are only storing any comments the user makes client sided, so it does not hit the api -- and any comments will be lost on refresh.

# Running the code

Make a `.env` file

You can reference an example using `/.env.sample`

`yarn install`

`yarn start` to run
