import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DownloadButton from "../components/download-button"
import "../styles/header.css"

const Header = ({ siteTitle }) => (
    <header>
        <div className="brand-container">
            <div className="brand-title">
                <Link to="/">{siteTitle}</Link>
            </div>
        </div>
        <div className="header-nav">
            <div className="nav-item btn btn-transparent">
                <span>
                    <Link to="/#features">Features</Link>
                </span>
            </div>
            <DownloadButton
                className="nav-item"
                analyticsLabel="Header Download Button"
                text="Download"
            />
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
