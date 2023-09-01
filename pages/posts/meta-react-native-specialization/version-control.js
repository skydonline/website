import { Box, Container, List, Link, Text, Code } from '@chakra-ui/react'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  ImageCaption,
  Title,
  CodeBox,
  IC,
  PostImage,
  TableOfContents,
  CommandLineTable
} from '../../../components/posts'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import certificate from '../../../public/images/posts/program-javascript-cert.jpeg'
import cvcs_dvcs from '../../../public/images/posts/cvcs_dvcs.png'
import ci_cd from '../../../public/images/posts/ci_cd.png'
import gitStates from '../../../public/images/posts/git_states.png'

const inputRedirectCode = `cat < file.txt
# takes file.txt as input for cat command
# prints content of file.txt to the console`

const outputRedirectCode = `# assume current directory has "file.txt" file and "coding" folder
ls > result.txt  # stores ls output into result.txt
less result.txt  # shows result.txt content`

const standardErrorCode = `# assume /notExist folder doesn't exist

ls /notExist > error.txt  # prints error message to console: "ls: /notExist: No such file or directory"

ls /notExist 2> error.txt  # stores error message in error.txt

less error.txt  # shows error.txt content: "ls: /notExist: No such file or directory"

ls /notExist > stdError.txt 2>&1  # stores /notExist content if /notExist does exist, otherwise stores error message (fail-safe method)`

const namesFileCode = `Samie
Samanda
Ashley
Jennifer
Joshua
Amanda
Daniel
David
James
Robert
John
Joseph
Jasamine
Ryan
Brandon
Jason
Justin
Sarah
William
Rosa`

const searchGrepResultCode = `grep Sa file.txt

# output:
#Samie
#Samanda
#Sarah

grep sa file.txt

# output:
#Jasamine
#Rosa

grep -i Sa file.txt  # ignore casing

# output:
#Samie
#Samanda
#Jasamine
#Sarah
#Rosa

grep -w Sa file.txt  # exact matches only

# output:
`

const gitCommandsCode = `git status  # prints current git state

git add file.txt  # Git now tracks file.txt

git restore --staged file.txt  # Git no longer tracks
git add file.txt  # Git again tracks file.txt

git commit -m "Commit message"  # commits on local machine with message

git push  # pushes to repository`

const Work = () => (
  <Layout title="Version Control">
    <Container>
      <Title>Version Control</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>Version control systems and tools</PostListItem>
        <PostListItem>Git and GitHub</PostListItem>
        <PostListItem>
          Navigating and configurating the command line interface (CLI)
        </PostListItem>
      </List>
      <PostImage src={certificate} alt="certification" />
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents link="benefits" title="Benefits" />
        <TableOfContents link="types" title="Types" />
        <TableOfContents link="environments" title="Environments" />
        <TableOfContents link="ci/cd" title="CI/CD" />
        <TableOfContents link="command-line" title="Command Line" />
        <TableOfContents link="git-&-github" title="Git & GitHub" />
      </List>
      <PostBigHeading>Introduction:</PostBigHeading>
      <P>
        Version control is an essential concept for software engineering. It
        keeps track of your file history, a record of all modifications, and
        lets you go back to any previously saved version. Think of it as a
        Google Drive for your code. It also allows developers to seamlessly
        collaborate with each other, without messing other people&apos;s code
        up.
      </P>
      <PostSmallHeading id="benefits">Benefits</PostSmallHeading>
      <P>
        There are numerous benefits that come with version control: revision
        history, identity, collaboration, automation, and many more. Revision
        history allows developers to see all changes to a project overtime, with
        the ability to revert to any previous state. This is particularly useful
        if the new code causes issues/bugs, because the team can go back to a
        prior working version. Each change comes with an identity, that displays
        who made the change, when the change was made, and what changes were
        made. Collaboration is made easier, since developers can use version
        control to review other&apos;s code, to ensure it is high quality. Many
        people are able to work on the project simultaneously, and can merge
        everyone&apos;s work at the end without breaking the codebase. Automated
        tests can be implemented, to ensure the code works as intended with
        every new change. While these are just some advantages of version
        control, there are many more, and version control is an essential
        component to every software project.
      </P>
      <PostSmallHeading id="types">Types</PostSmallHeading>
      <P>
        There are 2 main types of version control systems: centralized and
        distributed.
      </P>
      <P>
        A centralized version control system (CVCS) has a main server and a
        client. The server is the respository, containing the version history of
        the code base. The client needs to pull the code from the server to
        their local machine, which makes a copy of the downloaded code. To make
        changes to the codebase, the developer has to push the changes to the
        server, so other developers can see them. The developer always has the
        latest version of the code.
      </P>
      <P>
        Distributed version control systems (DVCS) is similar to the centralized
        model. The developers still need to pull code from the server, but
        instead of each local machine being a client, they also act like a
        server. The pull from the main server also pulls the verison history, so
        the developer is able to see the entire history of changes to the
        project on their local machine.
      </P>
      <P>
        CVCS is considered easier to learn and enable more access control to the
        users. There can be authentication methods and restrictions in place,
        only allowing certain users to perform certain actions. However, it is
        considered slower since a server connection is required in order to
        perform actions. In DVCS, no server connection is required to add
        changes or view file history. It essentially feels like you have the
        server downloaded on your local machine. It is faster than CVCS, because
        CVCS heavily relies on the server; if the server slowed down or stopped
        working, development had to stop. However, in a DVCS, a connection is
        still required to push or pull changes from the main server.
      </P>
      <PostImage src={cvcs_dvcs} alt="CVCS and DVCS" />
      <ImageCaption>Left: CVCS, Right: DVCS</ImageCaption>
      <PostSmallHeading id="environments">Environments</PostSmallHeading>
      <P>
        To ensure a great user experience, development teams need to verify the
        code they are releasing does not cause any bugs. Typically, teams will
        set up environments to test and verify their code, to identify any
        potential issues before publishing their code.
      </P>
      <P>
        The staging environment mimics the production environment (public user
        experience). The more similar the staging and production environments,
        the more accurate the testing becomes. This is because they are then
        essentially the same, just varying in who has access to the staging
        environment. It can also be used as a beta trial for new features.
      </P>
      <P>
        The production (live) environment is what public users see and interact
        with. Prior to this stage, code problems should be minimized due to
        rigorous testing in the staging environment. Downtime for the product
        typically impacts the revenue and reputation of the service. Users will
        not be able to access the product, and frequent downtime due to bugs
        causes distrust amoung its users. Cyber-security considerations need to
        be in place, to prevent the data of the application.
      </P>
      <PostSmallHeading id="ci/cd">CI/CD</PostSmallHeading>
      <P>
        Continuous Integration (CI) means automating code changes into a single
        main stream. When the workflow consists of small frequent changes, this
        reduces merge conflict in the code. CI compiles the project
        automatically and runs tests on each iteration to verify the codebase is
        working as intended to prevent regressions.
      </P>
      <P>
        Continuous Delivery (CD) extends CI. Once the changes are successfully
        merged into the main stream, a CD system automatically bundles the
        application and prepares it for actual deployment.
      </P>
      <P>
        Continuous Deployment (also apart of CD) extends CD. It frequently
        releases the software to the customers. Typically, the developers create
        a testing environment that the development build has to pass, and then
        it is deployed to the live environment for customers to use.
      </P>
      <PostImage src={ci_cd} alt="CI/CD cycle" />
      <ImageCaption>Illustration of the CI/CD cycle</ImageCaption>
      <PostSmallHeading id="command-line">Command Line</PostSmallHeading>
      <P>
        People can seemlessly interact with computers on a daily basis through a
        graphical user interface (GUI), since it is visual and intuitive to use.
        However, there are limitations to using a GUI for developers, since it
        is considered less powerful and slower than the command line interface
        (CLI). The command line enables the user to perform various advanced
        actions that is not possible with the GUI. Below are a few common CLI
        commands (note: variables can be any name):
      </P>
      <CommandLineTable />
      <P>
        Flags are optional parameters we can give to a command. They change the
        behavior or provide extra functionality of that command. For example,{' '}
        <IC>ls -a</IC> is simply the <IC>ls</IC> command with the <IC>-a</IC>{' '}
        flag. Instead of only printing out the contents, it additionally prints
        out hidden content. The <IC>ls -l</IC> command prints out the directory
        contents in a list with the read/write permissions and owners.
      </P>
      <P>
        A powerful feature inside CLIs is the &quot;pipe&quot; command, which is
        used with this symbol: <IC>|</IC>. It enables you to combine multiple
        commands together into a single line, by using the output for one
        command as the input for another command. This is known as
        &quot;piping&quot;.
      </P>
      <P>
        Redirection in a CLI provides control over the input, output and error
        message of a command. There are 3 input/output (IO) redirections:{' '}
        <b>
          standard input (stdin), standard output (stdout), and standard error
          (stderr)
        </b>
        . The command-line shell keeps references for the IO using numbers. 0
        represents standard input, 1 represents standard output, 2 represents
        standard error.
      </P>
      <P>
        To interact with computers, we provide input. This can be the keyboard,
        mouse, microphone, etc. Certain commands also require input for them to
        work. For example, the <IC>cat</IC> command concatenates and displays
        the content of the file, and needs some sort of file as an input for it
        to work. We can use the input redirection symbol, <IC>&lt;</IC> to
        redirect an input into the <IC>cat</IC> command.
      </P>
      <CodeBox language="bash">{inputRedirectCode}</CodeBox>
      <P>
        Every command in Unix has an input source and output source. We can
        actually redirect the output source to wherever we desire, using the{' '}
        <IC>&gt;</IC> symbol. For example, we can record the entire output of
        the <IC>ls</IC> command in a file.
      </P>
      <CodeBox language="bash">{outputRedirectCode}</CodeBox>
      <P>
        The last possible redirect is the standard error. This happens when an
        unexpected error occurs when running a command. The symbol is{' '}
        <IC>2&gt;</IC>. It is similar in spirit to the output redirect, but
        instead only contains the error if it does occur. It can be used in
        conjunction with the output symbol (<IC>&gt;</IC>) as a
        &quot;fail-safe&quot; option, to ensure the command still runs. If it
        can be executed, the appropiate output will be used, otherwise if an
        error occured, then the error will be used. Keep in mind, if it is used
        with the output redirection symbol, it is then denoted as{' '}
        <IC>2&gt;&1</IC>.
      </P>
      <CodeBox language="bash">{standardErrorCode}</CodeBox>
      <P>
        Global regular expression print, also known as <IC>grep</IC>, is used to
        search and filter text in files or data streams. It matches the provided
        expression and then prints the results to the terminal. The basic usage
        is <IC>grep term file</IC>, where <IC>term</IC> is the text being
        searched for and <IC>file</IC> is the file or data stream that is being
        searched in.
      </P>
      <CodeBox language="text">{namesFileCode}</CodeBox>
      <ImageCaption>names.txt</ImageCaption>
      <CodeBox language="bash">{searchGrepResultCode}</CodeBox>

      <PostSmallHeading id="git-&-github">Git & GitHub</PostSmallHeading>
      <P>
        Git is a version control system that tracks changes to projects. Git is
        incredibly popular due to its performance and reliability. GitHub is a
        web plaform that stores all the files and folders to allow developers to
        collaborate, similar to Google Drive.
      </P>
      <P>
        There are 3 Git workflow states: <b>modified, staged, committed</b>. The
        modified state is when any file has been modified in any way inside the
        repository. Git know the file has changed itself, but does not track it
        in terms of saving it to the version history. In order for a file to be
        tracked, it must be added to the staged area, where then Git tracks
        changes to the file. The committed state is a savepoint for the file and
        entire repository, keeping a copy of the repository at the time of
        commit. The savepoint is added to the version history of the repository.
      </P>
      <PostImage src={gitStates} alt="Git States" />
      <P>
        <IC>git status</IC> displays the current state of your working
        directory. It shows the current branch, modified files, untracked files,
        and files staged for commit. <IC>git add x</IC> lets Git know that file{' '}
        <IC>x</IC> should be tracked, and will be apart of the next code commit.
        To remove it from the staged state and not be in the next code commit,
        use the command <IC>git restore --staged x</IC> to restore file{' '}
        <IC>x</IC>. In order for the code to be committed on your local machine,
        run the command <IC>git commit -m &quot;x&quot;</IC>, where x is the
        message that will go along with the commit. For the changes to be
        available on the main repository, run <IC>git push</IC>.
      </P>
      <CodeBox language="bash">{gitCommandsCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work
