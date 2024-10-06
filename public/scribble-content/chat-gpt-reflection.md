ChatGPT is an awesome tool—particularly in the software engineering world. 
You provide it with plain English, and it generates a 500+ line file that accomplishes 95% of the task you ask for.
But what happens with the other 5%?
As I took the weekend to create the **Scribble** page, I found myself in this exact situation.

As someone who despises front-end work, I initially found ChatGPT to be the best ad hoc pair programmer money could buy (I only use the free tier). However, as I continued to develop with the tool, it became clear how reliant I was becoming.

My first requests were merely simple questions like, "How do I comment on markdown files?" and "What package do I need to import heroicons?" But as I started to realize the tool's full potential, I began to make requests like, "Create a blog-like React.js file using Tailwind CSS."

To my surprise, ChatGPT generated a 53-line JavaScript file that dynamically populated blog-like objects on the screen. At that moment, I realized I could turn off my brain and let the tool do the heavy lifting, creating something from nothing.

However, this quickly turned into a slippery slope. I became fixated on leveraging ChatGPT to add more features, throwing increasingly ambitious requests and simply copying and pasting the code into my projects without much thought. There was no forethought or second-guessing; it became a stream of consciousness between myself and the AI chatbot. As you might expect, my code began to break. The CSS became misaligned, markdown files displayed as HTML instead of text, and a massive world map unexpectedly dominated the entire Scribble page. That's when my frustration set in.

> “You gave me the wrong answer.“ “Why does not that work?" "Try Again."  

I was on a bit of a time crunch to meet a friend for lunch, and once I set my mind to something, I would not consider it finished until I was satisfied. However, my entire website was a disaster. Out of pure frustration, I reverted three hours of *work* from the codebase, deleted my AWS Amplify application, and redeployed everything—purely to restore a functioning website.

In my fixation on making something work, I failed to understand why it had worked in the first place.

This habit is one I consciously strive to amend, as I believe it originated from my academic experience. In school, we are taught to prioritize results, and this emphasis on outcomes was reinforced throughout my schooling, where timely submissions and performance were critical.

- If you do not turn in homework on time, your grade suffers.
- If you do not complete the lab on time, your grade suffers.
- If you do not perform well on the next exam, your grade drops by 25%.

Oftentimes in academia, I found myself tunnel-visioned on just *getting things done*—which, admittedly, is not how it should be. This behavior resurfaced while I was creating this page, leading to a degree of resentment toward myself. I failed to grasp the reasoning behind the code and instead focused solely on making it work.

It is ironic because, at work, I was reluctant to use GitHub Copilot when it was released enterprise-wide. I wanted to limit my use of the tool as much as possible to encourage myself to *learn* instead of simply expecting answers. Yet, when it came to my home projects, that mindset did not seem to apply subconsciously. There were no deadlines to meet, and no external reasons to get things done, and yet I still found myself rushing for results.

Interestingly, the reason my website became a hot mess was that React could not load markdown files as strings. After taking a break from the screen, I realized it only took a quick Google search to find the solution — rendering three hours of frustrated conversations with an AI bot seem pointless.

Ultimately, ChatGPT serves a valuable purpose and can be leveraged in powerful ways. However, as a user, it is important to be mindful of its use cases and draw a clear distinction between enhancing your productivity and doing the work for you. If you start to rely on the tool too much, you are essentially cheating yourself. Just try not to cut corners, and in the end, you will be better off than if you relied solely on a computer for assistance — look at Wall-E.

*cjm*
