import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div
      className="container text-left"
      style={{
        marginTop: "90px",
        fontFamily: "Ramabhadra",
        fontSize: "22px",
        padding: "10px",
      }}
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item accDiv">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h3>బాల్యం</h3>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                డాక్టర్ బి.వి.న్.స్వామి గారి పూర్తి పేరు భైరవి వెంకట నరసింహ
                స్వామి.
              </p>
              <p>
                కొహెడ మండలం వరికోలులో లక్ష్మీదేవి - అనంతస్వామి దంపతులకు 1964
                డిసెంబర్ 16న జన్మించారు.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item accDiv">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h3>విద్యాభ్యాసం</h3>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                స్వామి గారు ఇంటర్మీడియట్ కరీంనగర్ లో , డిగ్రీ హనుమకొండలో
                చదివారు. తరువాత గుంటురులోని ఆచార్య నాగార్జున విశ్వవిద్యాలయంలో
                యెం.ఏ(చరిత్ర) మరియు వరంగల్‌లోని కాకతీయ విశ్వవిద్యాలయంలో
                యెం.ఏ(తెలుగు) పూర్తిచేసారు.
              </p>
              <p>
                అంతే కాక, హైదరాబాదులోని పొట్టి శ్రీరాములు తెలుగు విశ్వవిద్యాలయం
                ద్వారా 'ఉత్తర తెలంగాణ కథాసాహిత్యం - పరిశీలన 1970 నుంచి 2000
                వరకు' అనే అంశంపై ఆయన చేసిన పరిశోధనకుగాను డాక్టరేట్ ను ప్రదానం
                చేసారు.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item accDiv">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h3>ఉద్యోగం</h3>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                ప్రస్తుతం వీరు కరీంనగర్ జిల్లా, కార్ఖానాగడ్డ ప్రభుత్వ ఉన్నత
                పాఠశాలలో ప్రధానోపాధ్యాయులుగా పనిచేస్తున్నారు. కరీంనగర్ జిల్లా,
                రాంనగర్ వారి స్థిరనివాసము.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item accDiv">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <h3>కవిత్వం</h3>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                గత రెండు దశాబ్దాలుగా కథా రచన చేస్తున్నారు. కథా విమర్శ, కథా
                పరిశోధన, కథా కార్యశాల నిర్వహణ ఇష్టంగా చేస్తున్నారు. రెండు కథా
                సంపుటాలు, మూడు విమర్శా సంపుటాలు, రెండు పరిశొధనా సంపుటాలు
                వెలువరిచారు.
              </p>
              <p>
                "కశప"(కథా శతక పద్యం) అనే కొత్త ప్రయోగం, కథా సాహిత్యంలో
                నిలిచిపోయేదిగా వీరు మలిచారు. దాదాపు వందకు పైగా కథలు రాసిన వీరు
                స్నేహితులతో కలిసి మూడు కథా సంకలనాలకు సంపాదకత్వం వహించారు. అందులో
                "తెలంగాణ చౌక్" (ఉద్యమ కథల తొలి సంకలనం) విశిష్టమైనది.
              </p>
              <p>
                పి.వి. గారి శతజయంతి సందర్భంగా వీరు రచించిన, "
                పి.వి.నరసింహారావు(కొన్ని వచన రచనలు - ఒక పరిశీలన)" అనే పుస్తకం
                పలువురి ప్రశంసలు అందుకొంది. వీరి కథలు ప్రముఖ పత్రికలలో
                ప్రచురింపబదినాయి.
              </p>
              <p>
                తెలంగాణ ప్రభుత్వం వారిచే జిల్లా స్థాయి ఉత్తమ రచయిత మరియు పొట్టి
                శ్రీరాములు తెలుగు విశ్వవిద్యాలయం వారిచే సాహిత్య పురస్కారం
                అందుకున్నారు. పలు సాహిత్య సంస్థలతో సన్నిహిత సంబంధం కలిగి ఉండి
                సాహితీసేవ చేస్తున్నారు.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
