// src/components/PageHeader/PageHeader.jsx
import styles from './PageHeader.module.css';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbs }) => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.overlay}></div>
      <div className={`${styles.content} container`}>
        <h1>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <ol>
              <li><Link to="/">Home</Link></li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className={!crumb.path ? styles.active : ''}>
                  {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </header>
  );
};

export default PageHeader;