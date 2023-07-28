import React, { useState } from "react";

const Home = () => {
  // if h = 4 then l <= 13
  // if h = 5 then l <= 36
  // 38 + 0.5 *3
  const svgX = 40;
  const svgY = 40;
  const safety = 5;
  const safetyText = 0.5;
  const cover = 40;
  const coverText = 4;

  const [values, setValues] = useState({
    height: 3,
    length: 10,
    safety: 0.5,
    width: 25,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleXLine1 = (height) => {
    const result = 10 * parseFloat(height) + (svgX + safety);
    return result;
  };

  const handleTextXLine1 = (height) => {
    const result = parseFloat(height) + safetyText;
    return result;
  };

  const handleXLine2 = (height, width) => {
    const result =
      10 * (parseFloat(height) + parseFloat(width)) + (svgX + safety * 2);
    return result;
  };

  const handleTextXLine2 = (height, width) => {
    const result = parseFloat(height) + parseFloat(width) + safetyText * 2;
    return result;
  };

  const handleXLine3 = (height, width) => {
    return (
      10 * (parseFloat(height) + parseFloat(width) + parseFloat(height)) +
      (svgX + safety * 3)
    );
  };

  const handleTextXLine3 = (height, width) => {
    const result =
      parseFloat(height) +
      parseFloat(width) +
      parseFloat(height) +
      safetyText * 3;
    return result;
  };

  const handleYLine4 = (length) => {
    return 10 * parseFloat(length) + svgY + safety;
  };

  const handleTextYLine4 = (length) => {
    return parseFloat(length) + safetyText;
  };

  const handleYLine5 = (height, length) => {
    return 10 * (parseFloat(length) + parseFloat(height)) + (svgY + safety * 2);
  };

  const handleYTextLine5 = (height, length) => {
    return parseFloat(length) + parseFloat(height) + safetyText * 2;
  };

  const handleYLine6 = (height, length) => {
    return (
      10 * (parseFloat(length) + parseFloat(height) + parseFloat(length)) +
      (svgY + safety * 3)
    );
  };

  const handleTextYLine6 = (height, length) => {
    return (
      parseFloat(length) +
      parseFloat(height) +
      parseFloat(length) +
      safetyText * 3
    );
  };

  const handleYLine7 = (height, length) => {
    return (
      10 *
        (parseFloat(length) +
          parseFloat(height) +
          parseFloat(length) +
          parseFloat(height)) +
      (svgY + safety * 4)
    );
  };

  const handleTextYLine7 = (height, length) => {
    return (
      parseFloat(length) +
      parseFloat(height) +
      parseFloat(length) +
      parseFloat(height) +
      safetyText * 4
    );
  };

  // if > 40 stop it
  // shows alert
  // subtract .5 from H || W
  // input validation <> 0 || 0.5 min
  const handleYLine8 = (height, length) => {
    return (
      10 *
        (parseFloat(length) +
          parseFloat(height) +
          parseFloat(length) +
          parseFloat(height)) +
      (svgY + safety * 4) +
      cover
    );
  };

  const handleTextYLine8 = (height, length) => {
    return (
      parseFloat(length) +
      parseFloat(height) +
      parseFloat(length) +
      parseFloat(height) +
      safetyText * 4 +
      coverText
    );
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="title">Custom Cardboard</h1>
        <h2 className="title">
          Cardboard dimensions | Length: 48" - Width: 40"
        </h2>
        <p className="title">Landscape Mode</p>

        <div className="row">
          <div className="col">
            <p className="titleCustom">48"</p>
            <div className="cardboard">
              <svg height="480" width="560">
                <rect
                  x={svgX}
                  y={svgY}
                  height="400"
                  width="480"
                  fill="#AD8762"
                />

                {/* <!-- Line 1 --> */}
                <line
                  x1={handleXLine1(values.height)}
                  y1="20"
                  x2={handleXLine1(values.height)}
                  y2="460"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />
                <text
                  className="lineXTest"
                  x={handleXLine1(values.height)}
                  y="15"
                  fill="blue"
                >
                  {handleTextXLine1(values.height)}"
                </text>

                {/* <!-- Line 2  --> */}
                <line
                  x1={handleXLine2(values.height, values.width)}
                  y1="20"
                  x2={handleXLine2(values.height, values.width)}
                  y2="460"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />

                <text
                  className="lineXTest"
                  x={handleXLine2(values.height, values.width)}
                  y="15"
                  fill="blue"
                >
                  {handleTextXLine2(values.height, values.width)}"
                </text>

                {/* <!-- Line 3 f= h + w + + h + 1   --> */}
                <line
                  x1={handleXLine3(values.height, values.width)}
                  y1="20"
                  x2={handleXLine3(values.height, values.width)}
                  y2="460"
                  stroke="red"
                  strokeWidth="2"
                  strokeDasharray="0"
                />

                <text
                  className="lineXTest"
                  x={handleXLine3(values.height, values.width) + 4}
                  y="35"
                  fill="blue"
                >
                  {handleTextXLine3(values.height, values.width)}"
                </text>

                {/* <!-- Line 4 --> */}
                <line
                  x1="20"
                  y1={handleYLine4(values.length)}
                  x2="540"
                  y2={handleYLine4(values.length)}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />

                <text
                  className="lineXTest"
                  x="10"
                  y={handleYLine4(values.length) - 4}
                  fill="blue"
                >
                  {handleTextYLine4(values.length)}"
                </text>

                {/* <!-- Line 5 --> */}
                <line
                  x1="20"
                  y1={handleYLine5(values.height, values.length)}
                  x2="540"
                  y2={handleYLine5(values.height, values.length)}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />

                <text
                  className="lineXTest"
                  x="10"
                  y={handleYLine5(values.height, values.length) + 15}
                  fill="blue"
                >
                  {handleYTextLine5(values.height, values.length)}"
                </text>

                {/* <!-- Line 6  --> */}
                <line
                  x1="20"
                  y1={handleYLine6(values.height, values.length)}
                  x2="540"
                  y2={handleYLine6(values.height, values.length)}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />

                <text
                  className="lineXTest"
                  x="10"
                  y={handleYLine6(values.height, values.length) - 4}
                  fill="blue"
                >
                  {handleTextYLine6(values.height, values.length)}"
                </text>

                {/* <!-- Line 7  --> */}

                <line
                  x1="20"
                  y1={handleYLine7(values.height, values.length)}
                  x2="540"
                  y2={handleYLine7(values.height, values.length)}
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="5"
                />

                <text
                  className="lineXTest"
                  x="10"
                  y={handleYLine7(values.height, values.length) + 15}
                  fill="blue"
                >
                  {handleTextYLine7(values.height, values.length)}"
                </text>

                {/* <!-- Line 8  --> */}

                <line
                  x1="20"
                  y1={handleYLine8(values.height, values.length)}
                  x2="540"
                  y2={handleYLine8(values.height, values.length)}
                  stroke="red"
                  strokeWidth="2"
                  strokeDasharray="0"
                />

                <text
                  className="lineXTest"
                  x="10"
                  y={handleYLine8(values.height, values.length) - 4}
                  fill="blue"
                >
                  {handleTextYLine8(values.height, values.length)}"
                </text>
              </svg>
            </div>
          </div>
          <div className="col">
            <div className="inputForm">
              <h4 className="titleForm">Please enter custom dimensions.</h4>
              <div className="divider"></div>
              <div className="input-group">
                <label htmlFor="height">Height</label>
                <input
                  min={0.5}
                  max={4.5}
                  name="height"
                  step={0.5}
                  type="number"
                  value={values.height}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="length">Length</label>
                <input
                  min={10}
                  max={12.5}
                  name="length"
                  step={0.5}
                  type="number"
                  value={values.length}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="width">Width</label>
                <input
                  min={14}
                  max={37.5}
                  name="width"
                  step={0.5}
                  type="number"
                  value={values.width}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="safety">Safety</label>
                <input
                  name="safety"
                  type="text"
                  value={values.safety}
                  // onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
