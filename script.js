// File content data for English and Chinese
const files = {
    en: {
        "about_me.txt": `<span class="comment">// Personal Introduction </span>
Hi! I am <span class="highlight">[Junze Zhang]</span>, a passionate programmer with experience in web development, software engineering,
and machine learning.

With startup experience, I specialize in creating efficient, scalable solutions and uncovering patterns in complex datasets. I am passionate about problem-solving and quick to learn new technologies.

Curiosity is at the core of my work -- whether it's diving into new concepts, crafting innovative solutions,
or navigating the ever-evolving tech world, I'm always eager to learn and grow.

In leisure time, I enjoy going sightseeing, keeping fit, and discovering new hobbies and experiences.

I’m seeking roles in software development or data analysis where I can contribute and grow. Let’s connect!
<!-- Link to CV -->
<span class="highlight"><a href="/cv.pdf" target="_blank">My CV</a></span>

<span class="highlight"><a href="https://github.com/Junze-Zhang" target="_blank">GitHub: Junze-Zhang</a></span>`,

        "projects.txt": `<span class="comment">// My Projects</span>
Here are a few projects I've worked on:

<span class="highlight">InsightLabel, a Powerful Image Annotation Tool</span>
    A web-based image annotation tool for object detection data annotators, boosted with 
    machine learning assistance.
    
<span class="highlight">MEME -- Hate Speech Detection of Internet Memes with Multimodal Machine Learning</span>
    Detect hate speeches in meme pictures with BERT-based multimodal machine learning.

<span class="highlight">MKBQA -- Knowledge Graph Based Question Answering for Medical Inquiries</span>
    A medical question answering chatbot based on medical knowledge graphs.

<span class="comment">// More projects can be found at:</span>
<span class="highlight"><a href="/cv.pdf" target="_blank">My CV</a></span>`
    },
//     zh: {
//         "about_me.txt": `// 个人介绍
// Hi
//
// 我的主要工作重点是创建高效、优雅且可扩展的代码。
// 我喜欢探索新技术，参与开源项目，并从事具有挑战性的项目。
//
// <!-- 链接到简历 -->
// <span class="comment">// 您可以在此查看我的简历：</span>
// <span class="highlight"><a href="/cv" target="_blank">/cv</a></span>`,
//
//         "projects.txt": `// 我的项目
// 以下是我参与过的一些项目：
//
// <span class="highlight">1. 项目名称</span>
//     描述：这是一个使用 React.js 和 Node.js 构建的 Web 应用程序，允许用户...
//
// <span class="highlight">2. 另一个项目</span>
//     描述：这是一个基于 Python 的数据分析工具，使用了...
//
// <span class="comment">// 更多项目可以在这里找到：</span>
// <span class="highlight"><a href="/projects" target="_blank">/projects</a></span>`
//     }
};

let currentLanguage = 'en';

// Function to load the correct file content based on language
function loadFileContent(fileName) {
    const fileContent = files[currentLanguage][fileName];
    const fileContentElement = document.getElementById('file-content');
    const tabElement = document.getElementById('tab');

    if (fileContent) {
        fileContentElement.innerHTML = fileContent;
        tabElement.textContent = fileName;
    }
}

// Add click event to all file links
document.querySelectorAll('.file-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent actual link navigation
        const fileName = e.target.getAttribute('data-file');
        loadFileContent(fileName);
    });
});

// Language switch functionality
document.getElementById('language-switch').addEventListener('click', () => {
    // Switch language
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';

    // Update button text
    document.getElementById('language-switch').textContent = currentLanguage === 'en' ? '中文' : 'English';

    // Reload the current file content in the new language
    const currentFile = document.getElementById('tab').textContent;
    loadFileContent(currentFile);
});

// Initial content load
loadFileContent('about_me.txt');
