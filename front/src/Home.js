import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button , Form } from 'react-bootstrap'


const Home = ({ FundMe }) => {

  const [items, setItems] = useState([])

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control
                type="file"
                required
                name="file"
                //onChange={uploadToIPFS}
              />
              <Form.Control /*onChange={(e) => setName(e.target.value)}*/ size="lg" required type="text" placeholder="Name" />
              <Form.Control /*onChange={(e) => setDescription(e.target.value)}*/ size="lg" required as="textarea" placeholder="Description" />
              <Form.Control /*onChange={(e) => setPrice(e.target.value)}*/ size="lg" required type="number" placeholder="Price in ETH" />
              <div className="d-grid px-0">
                <Button /*onClick={createNFT}*/ variant="primary" size="lg">
                  Create & List NFT!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>

  );
}
export default Home