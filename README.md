# Friend Finder - Node and Express Servers
# LINK 
https://pure-anchorage-17715.herokuapp.com
"FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.


### Instructions

1. Survey has 5 questions . Each answer scales of 1 to 5 based on how much the user agrees or disagrees with a question.

2. `server.js` file  requires npm packages : `express` and `path`.

3. `htmlRoutes.js` file include two routes:

   * A GET Route to `/survey` which displays the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. `apiRoutes.js` file contains two routes:

   * A GET route with the url `/api/friends` displays a JSON of all possible friends.
   * A POST routes `/api/friends` is used to handle incoming survey results. This route  also used to handle the compatibility logic.

5. Application's data is inside of `app/data/friends.js` as an array of objects. Each of these objects follows the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      ]
}
```

6. We determine the user's most compatible friend using the following:

   * Converting each user's results into a simple array of numbers (`[5, 1, 4, 4, 5]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * User 1: `[5, 1, 4, 4, 5]`
       * User 2: `[3, 2, 6, 4, 5]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   *We use absolute value of the differences with Math.abs() method . App calculates both `5-3` and `3-5` as `2`, and so on.
   * The closest match is the user with the least amount of difference.

7. Once we found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal displays both the name and picture of the closest match.

