import * as React from 'react';
import styles from './SearchBox.module.scss';
import { ISearchBoxProps } from './ISearchBoxProps';
import { ISearchBoxState } from './ISearchBoxState';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
  /**
   *
   */
  constructor(props : ISearchBoxProps) {
    super(props);
    this.state ={
      searchString : ''
    };
  }
  public render(): React.ReactElement<ISearchBoxProps> {
    return (
      <div className={styles.searchBox}>
        <div className={styles.container}>
          <div className={styles.searchboxInput} >
            <Icon iconName="Search"
              onClick={this._onClick}
              className={styles.searchBoxIcon} />
            <input
              placeholder="Search..."
              onKeyDown={this._onEnter}
              className={styles.inputBox}
              onChange={event => {this.setState({searchString: event.target.value});}}
            />
          </div>
        </div>
      </div>
    );
  }

  private _onEnter = (e) => {
    if (e.key === 'Enter') {
      const q = encodeURI(this.state.searchString);
      const url = `${this.props.context.pageContext.site.absoluteUrl}/_layouts/15/search.aspx/siteall?q=${q}`;
      window.location.href = url;
    }
  }

  private _onClick = () =>{
    const q = encodeURI(this.state.searchString);
    const url = `${this.props.context.pageContext.site.absoluteUrl}/_layouts/15/search.aspx/siteall?q=${q}`;
    window.location.href = url;
  }

}
