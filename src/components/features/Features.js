import React from "react";

function Features() {
  return (
    <div className="min-h-screen bg-base-200 p-2">
      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-2xl font-semibold text-sky-400/75">URL Analysis</h1>
        <p className="p-3 text-lg">
          URL Analysis: The application scrutinizes URLs using advanced
          algorithms to detect potential phishing traits. It examines various
          aspects of the URL such as domain name, subdomains, path, and query
          parameters, comparing them against known patterns of phishing URLs. By
          analyzing these components, it assesses the likelihood of the URL
          being malicious, providing users with valuable insights into its
          trustworthiness.
        </p>
      </div>

      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-2xl font-semibold text-sky-400/75">
          Data Collection
        </h1>
        <p className="p-3 text-lg">
          <b>Phishing URLs</b>
          <br />
          The collection of phishing URLs is from a opensource service called
          PhishTank. This service gets updated hourly. To download the data:
          https://www.phishtank.com/developer_info.php
        </p>
        <p className="p-3 text-lg">
          <b>Legitimate URLs</b>
          <br />
          The source of legitimate urls is University of New Brunswick. The
          number of legitimate URLs in this collection are 35,300. To download
          the data: https://www.unb.ca/cic/datasets/url-2016.html
        </p>
      </div>
      <div className="card bg-base-300 rounded-box p-2 m-2">
        <h1 className="text-2xl font-semibold text-sky-400/75">
          Feature Extraction using Python
        </h1>
        <p className="p-3 text-lg">1. Used Google Colab Notebook with Python</p>
        <p className="p-3 text-lg">2. 8 Address Bar based Features used</p>
        <p className="p-3 text-lg">3. 5 Domain based Features used</p>
        <p className="p-3 text-lg">4. 2 HTML and JavaScript based Features</p>
        <p className="p-3 text-lg">
          5. Label consist of 0's(Legitimate) and 1's(Phishing)
        </p>
      </div>
    </div>
  );
}

export default Features;
