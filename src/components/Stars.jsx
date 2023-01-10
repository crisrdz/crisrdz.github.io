import "./Stars.css";

function Stars() {
  return (
    <>
      <svg width="400" height="200" className="svg svg-1">
        <circle cx="2" cy="150" r="2" fill="white" />
        <circle cx="125" cy="50" r="2" fill="white" />
        <circle cx="200" cy="150" r="2" fill="white" />
        <circle cx="350" cy="60" r="2" fill="white" />
        <polyline
          strokeLinejoin="round"
          points="2,150 125,50 200,150 350,60"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
      </svg>

      <svg width="400" height="250" className="svg svg-2">
        <circle cx="2" cy="10" r="2" fill="white" />
        <circle cx="90" cy="60" r="2" fill="white" />
        <circle cx="160" cy="110" r="2" fill="white" />
        <circle cx="300" cy="110" r="2" fill="white" />
        <circle cx="330" cy="120" r="2" fill="white" />
        <circle cx="180" cy="30" r="2" fill="white" />
        <circle cx="50" cy="248" r="2" fill="white" />
        <circle cx="145" cy="31" r="2" fill="white" />
        <circle cx="210" cy="40" r="2" fill="white" />

        <polyline
          strokeLinejoin="round"
          points="2,10 90,60 160,110 300,110 330,120"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
        <polyline
          strokeLinejoin="round"
          points="50,248 160,110 180,30"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
        <polyline
          strokeLinejoin="round"
          points="145,31 180,30 210,40"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
      </svg>

      <svg width="400" height="200" className="svg svg-3">
        <circle cx="2" cy="20" r="2" fill="white" />
        <circle cx="70" cy="80" r="2" fill="white" />
        <circle cx="300" cy="90" r="2" fill="white" />

        <polyline
          strokeLinejoin="round"
          points="2,20 70,80 300,90"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
      </svg>

      <svg width="400" height="250" className="svg svg-4">
        <circle cx="14" cy="20" r="2" fill="white" />
        <circle cx="130" cy="70" r="2" fill="white" />
        <circle cx="200" cy="74" r="2" fill="white" />
        <circle cx="320" cy="60" r="2" fill="white" />
        <circle cx="2" cy="200" r="2" fill="white" />
        <circle cx="300" cy="160" r="2" fill="white" />

        <polyline
          strokeLinejoin="round"
          points="14,20 130,70 200,74 320,60"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>

        <polyline
          strokeLinejoin="round"
          points="2,200 130,70"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>

        <polyline
          strokeLinejoin="round"
          points="300,160 200,74"
          stroke="aliceblue"
          strokeWidth="1"
          fill="none"
        ></polyline>
      </svg>

      <svg width="10px" height="10px" className="star" id="star-1">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-2">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-3">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-4">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-5">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>
      
      <svg width="10px" height="10px" className="star" id="star-6">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-7">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-8">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>

      <svg width="10px" height="10px" className="star" id="star-9">
        <circle cx="5" cy="5" r="2" fill="white" />
      </svg>
    </>
  );
}

export default Stars;
