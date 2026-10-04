import { useState, useEffect } from 'react';
import { Row, Container, Card, Badge, Alert, Spinner } from 'react-bootstrap';
import { fetchNewsWithCache } from '../utils/fetchNews';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop";

function NewsPage({ title, category, lang }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);
  const [isFromCache, setIsFromCache] = useState(false);

  const apiGet = async () => {
    setLoading(true);
    const result = await fetchNewsWithCache(category, lang);
    setData(result.articles || []);
    setIsQuotaExceeded(result.isQuotaExceeded);
    setIsFromCache(result.isFromCache);
    setLoading(false);
  };

  useEffect(() => {
    apiGet();
    // Refresh cache periodically every 30 mins (1,800,000 ms) instead of 1000s
    const interval = setInterval(() => {
      apiGet();
    }, 1800000);
    return () => clearInterval(interval);
  }, [category, lang]);

  return (
    <Container fluid className="mt-3 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="m-0">{title}</h3>
        {isFromCache && !isQuotaExceeded && (
          <Badge bg="info" className="p-2">
            ⚡ Cached (Fast Load)
          </Badge>
        )}
      </div>

      {isQuotaExceeded && (
        <Alert variant="warning" className="d-flex align-items-center justify-content-between shadow-sm">
          <div>
            <strong>⚠️ Daily API Quota Reached:</strong> The free GNews API 100 requests/day limit has been reached. Showing cached & fallback news so your site stays live and readable.
          </div>
          <Badge bg="dark" className="ms-2">Quota Guard Active</Badge>
        </Alert>
      )}

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" role="status" />
          <p className="mt-2 text-muted">Fetching latest news...</p>
        </div>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {data.map((value, index) => {
            return (
              <Card key={index} className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={value.image || DEFAULT_IMAGE}
                  height="220px"
                  style={{ objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DEFAULT_IMAGE;
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h6 fw-bold">{value.title}</Card.Title>
                  <Card.Text className="text-secondary small flex-grow-1">
                    {value.description}
                  </Card.Text>
                  <div className="mb-2 mt-auto">
                    <Badge bg="secondary" className="me-2">
                      {value.source && value.source.name ? value.source.name : 'GNews'}
                    </Badge>
                    <small className="text-muted">
                      {value.publishedAt && new Date(value.publishedAt).toLocaleString()}
                    </small>
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center bg-light">
                  <a href={value.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                    Read full article
                  </a>
                  {value.source && value.source.url && (
                    <a href={value.source.url} target="_blank" rel="noopener noreferrer" className="text-muted small text-decoration-none">
                      Visit source
                    </a>
                  )}
                </Card.Footer>
              </Card>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default NewsPage;
