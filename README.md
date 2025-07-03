<h1>Consent File Sorter (NHC Consent Check)</h1>

<p>Consent File Sorter is a Chrome Extension designed to help professionals efficiently organize client consent documents. It allows you to drag and drop multiple files, automatically sorts them into categorized folders based on a predefined checklist, and then packages the results into a downloadable ZIP archive.</p>

<p>All file handling and sorting is performed <strong>entirely in your browser</strong>, ensuring that no data is ever uploaded to a server.</p>

<blockquote>
  <strong>Disclaimer:</strong> This project was developed independently for use at Newport Healthcare and is not officially endorsed by or affiliated with Newport Healthcare. All document names used in the checklist are commonly known and do not include any confidential or proprietary policy text. This repository is published under my own development rights. If Newport Healthcare requests modifications or clarifications, I am open to discussion.
</blockquote>

<h2>Features</h2>
<ul>
  <li>🗂️ Drag-and-drop file upload</li>
  <li>✅ Automatically categorizes documents by checklist</li>
  <li>📁 Organizes into folders for Electronic Consents, ROI, and Unknown</li>
  <li>📦 Generates a downloadable ZIP archive</li>
  <li>🔒 100% local processing in the browser (no server uploads)</li>
  <li>🖇️ Supports PDF, DOC, DOCX, JPG, and PNG file types</li>
</ul>

<h2>Installation (Development)</h2>
<ol>
  <li>Clone this repository:
    <pre><code>git clone https://github.com/JRodriguez-Luna/nhc-consent-check.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre>
      <code>npm install</code>
      <code>npm install jszip</code>
      <code>npm install react-dropzone</code>
    </pre>
  </li>
  <li>Build the extension:
    <pre><code>npm run build</code></pre>
  </li>
  <li>Load the unpacked extension in Chrome:
    <ul>
      <li>Go to <code>chrome://extensions</code></li>
      <li>Enable <strong>Developer mode</strong></li>
      <li>Click <strong>Load unpacked</strong></li>
      <li>Select the <code>dist</code> folder</li>
    </ul>
  </li>
</ol>

<h2>Usage</h2>
<ul>
  <li>Open the extension popup</li>
  <li>Drag and drop consent documents into the drop zone</li>
  <li>The extension will analyze, categorize, and zip the files</li>
  <li>A ZIP archive with sorted folders will automatically download</li>
  <li>A checklist note will identify missing or unknown items</li>
</ul>

<h2>Roadmap</h2>
<ul>
  <li>Add options for custom checklists</li>
  <li>Add preview for missing checklist items before download</li>
  <li>Support additional file types</li>
  <li>Option to upload to secure storage in the future</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
