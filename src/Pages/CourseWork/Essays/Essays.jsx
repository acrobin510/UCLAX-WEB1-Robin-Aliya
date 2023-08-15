import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS, and JS">
                <p>
                    HTML (Hypertext Markup Language) is form of code that allows
                    you to link pages together and create a website. It is the
                    structure of a website that shows hierarchy and content. It
                    is the vary basics of the website.
                </p>
                <p>
                    CSS (Cascading Style Sheets) is a stylesheet coding
                    language. It tells the website what color, font, layout,
                    dimensions you want the site to have - basically what you
                    want it to look like. CSS can be in a separate document from
                    HTML or it can be interspersed in the HTML.
                </p>
                <p>
                    Javascript (JS) is a code that allows viewers to interact
                    with a site. Basically anything you do when filling out a
                    form is js.
                </p>
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                <p>
                    Git is a software where you save changes you make to your
                    code. It is something you have on your computer. It’s like a
                    memory card for your code. You make changes and then commit
                    them to save them. You can also see past versions of your
                    code and view and revert back to them. Kinda like a time
                    machine. Kinda like the “save as” function so you can save
                    various versions of a project.
                </p>
                <p>
                    Github is a website where you can share and collaborate on
                    your code. Your code goes into a ‘repository’ or ‘repo’
                    which is basically a folder where you save your code. You
                    can view the changes you made like on your computer but you
                    can also see changes other people have made or suggested.
                    When some one makes a change they create a new ‘branch’ of
                    code. Kinda like a parallel universe where you make
                    different choices so there are different outcomes. They can
                    then request to merge their code into the main (“master”)
                    branch. If the owner of the repo likes the changes they will
                    accept the merge. You can also make a new branch if you want
                    to try something out but not affect the code you already
                    have. Depending on how you feel about the changes you make,
                    you can merge it back in or leave it as a separate branch or
                    delete the branch. You then need to pull the changes from
                    Github on to your computer so that everything is synced. You
                    ‘push’ your code onto Github and ‘pull’ changes from Github.
                </p>
                <p>
                    I liked this video on it:
                    https://www.youtube.com/watch?v=mJ-qvsxPHpY
                </p>
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                <p>They are both javascript libraries</p>
                <p>JQuery</p>
                <ul>
                    <li>was created in 2006</li>
                    <li>motto: “Write less, do more”</li>
                    <li>Way to write javascript more quickly and simply</li>
                    <li>
                        Still used the model of having 3 pages of code: one for
                        HTML, one for JS and one for CSS
                    </li>
                    <li>
                        Made it so that web developers didn’t have to worry
                        about what the browser was doing
                    </li>
                    <li>Primitive websites became web apps</li>
                    <li>Library for streamlining building web apps (js)</li>
                    <li>Pioneer for creating libraries for js</li>
                    <li>Very simple so large adoption rate</li>
                    <li>
                        Conglomerate library instead of individual libraries
                    </li>
                    <li>Have to re-make the wheel everytime</li>
                    <li>
                        Syntax usually starts with a dollar sign followed by
                        parenthesis
                    </li>
                    <li>Battle tested (across all browsers)</li>
                </ul>

                <p>React</p>
                <ul>
                    <li>
                        was created by Facebook Team in 2013 but didn’t get
                        popular until 2016
                    </li>
                    <li>
                        Uses components which makes coding more modular and you
                        can have your different types of code all in one place
                    </li>
                    <ul>
                        <li>Embed html inside javascript</li>
                        <li>
                            Allowed websites to be built and changed in a new
                            way that was easier so that more complex websites
                            could be created
                        </li>
                    </ul>
                    <li>Web app turned into large scale single page apps</li>
                    <li>Stands on the shoulders of JQuery</li>
                    <li>
                        Breaks down into more easily useable/manageable chunks
                    </li>
                    <li>
                        Virtual DOM tech - helps re-useable components and
                        application states
                    </li>
                    <li>Focuses on UI</li>
                    <li>Scales for larger apps</li>
                </ul>
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                <h5>Both:</h5>
                <ul>
                    <li>Need to know coding</li>
                    <li>They work together to make a website</li>
                    <li>Someone who does both does fullstack development</li>
                </ul>
                <h5>Front End Developers:</h5>
                <ul>
                    <li>Work with the look and feel of a website</li>
                    <li>Use mostly HTML CSS and JS</li>
                    <li>Deal with the parts of the website users can see</li>
                    <li>Use mostly HTML, CSS and JS</li>
                    <li>
                        Make sure you can get around the website and that it
                        looks good
                    </li>
                    <li>
                        Visual aspect of website, user interaction, design,
                        navigation - whatever shows up in user’s browser.
                    </li>
                    <li>
                        Responsive (You have change stuff so that it works on
                        different devices and browsers)
                    </li>
                    <li>
                        Use tools and frameworks/libraries: React, Vue, Angular
                    </li>
                </ul>
                <h5>Back End Developers:</h5>

                <ul>
                    <li>Work with servers</li>

                    <li>Usually have BA in computer science</li>

                    <li>Use mostly Python, Java, PHP and Ruby</li>

                    <li>Deal with data storage, security, site architecture</li>

                    <li>
                        Make sure what you put into the website gets were it
                        needs to go (Ex: Contact us form goes stores the input
                        correctly and goes to the right person)
                    </li>

                    <li>
                        Server side (behind the scenes), database, storage,
                        server, API (Data request), service - serving up the
                        site, security, PHP, ASP .Net, Python, Java
                    </li>

                    <li>You don’t have to worry about user device/browser</li>
                </ul>
            </Essay>
            <Essay question="Q5:What are the different ways we can link files/resources to our application?">
                <h5>Absolute vs Root vs Document Relative Linking</h5>
                <p>
                    Absolute: The global address of a resource (the url that
                    works no matter where you are)
                </p>
                <p> www.mywebsite.com/comics/upload/superman.jpeg</p>

                <p>
                    Root: relative to the project root (can be more flexible
                    about where the file is so when your testing vs launching
                    the site - the location/domain may change but the root
                    relative link will work)
                </p>
                <p>‘/comics/upload/superman.jpeg’</p>
                <p>
                    Document Relative: are links relative to the document you
                    are writing. (More self contained in a folder)
                </p>
                <p>Same directory: upload ’./superman.jpeg’</p>

                <p>Go up a directory: ‘../superman.jpeg’</p>
            </Essay>
            <Essay question="Q6:What is the difference between jpg, gif, png and svg images?">
                <p>
                    All are widely supported ways to digitally transmit images.
                    They are designed to have light files so that websites can
                    load quickly and without problem. PDF on the other hand is
                    made for print so it has heavier files with more detail.
                </p>

                <p>JPG (or JPEG)</p>
                <ul>
                    <li>Joint Photographic Experts Group</li>
                    <li>Proprietary lossy compression</li>
                    <li>Millions of colors</li>
                    <li>Smaller than png </li>
                    <li>Bitmap</li>
                </ul>
                <p>GIF </p>
                <ul>
                    <li>Graphical Interchange Format</li>
                    <li>A series of images that create short animations</li>
                    <li>Can support animation</li>
                    <li>
                        Indexed color format (less color options) (256 colors or
                        less)
                    </li>
                    <li>Bitmap</li>
                    <li>Was the best for logos before svg </li>
                    <li>Can be smaller than jpeg because of less </li>
                    <li>No gradient transparency - not true transparency </li>
                    <li>Only one channel</li>
                </ul>
                <p>PNG</p>
                <ul>
                    <li>Portable Network graphics</li>
                    <li>Lossless compression</li>
                    <li>Create to compete with gif royalties </li>
                    <li>Designed to be the best of gif and jpg</li>
                    <li>Millions of colors, or index colors (smaller file)</li>
                    <li>True transparency </li>
                    <li>2 channels rbg and alpha</li>
                    <li>Bitmap</li>
                </ul>
                <p>SVG</p>
                <ul>
                    <li>Scalable Vector Graphics</li>
                    <li>Vector images</li>
                    <li>Good for scaling</li>
                    <li>Light Files</li>
                    <li>Does not lose quality even when scaled</li>
                    <li>Good for logos</li>
                </ul>
            </Essay>
            <Essay question="Q7:Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.">
                4.This is my answer
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
