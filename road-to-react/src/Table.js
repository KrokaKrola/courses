import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import Sort from './Sort';

const largeColumn = {
  width: '40%'
};

const midColumn = {
  width: '30%'
};

const smallColumn = {
  width: '10%'
};

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {
    const {
      list,
      sortsFunctions,
      onDismiss,
    } = this.props;
    const {
      sortKey,
      isSortReverse
    } = this.state;
    const sortedList = sortsFunctions[sortKey](list);
    const reversedSortedList = isSortReverse ? sortedList.reverse() : sortedList;
    return (
      <div className="table">
        <div className="table-header">
          <span style={largeColumn}>
            <Sort sortKey={'TITLE'} onSort={this.onSort} activeSortKey={sortKey}>
              Title
        </Sort>
          </span>
          <span style={midColumn}>
            <Sort sortKey={'AUTHOR'} onSort={this.onSort} activeSortKey={sortKey}>
              Author
        </Sort>
          </span>
          <span style={smallColumn}>
            <Sort sortKey={'COMMENTS'} onSort={this.onSort} activeSortKey={sortKey}>
              Comments
        </Sort>
          </span>
          <span style={smallColumn}>
            <Sort sortKey={'POINTS'} onSort={this.onSort} activeSortKey={sortKey}>
              Points
        </Sort>
          </span>
          <span style={smallColumn}>Archive</span>
        </div>
        {reversedSortedList.map(item => (
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={midColumn}>{item.author}</span>
            <span style={smallColumn}>{item.num_comments}</span>
            <span style={smallColumn}>{item.points}</span>
            <span style={smallColumn}>
              <Button
                onClick={onDismiss}
                objectID={item.objectID}
                className="button-inline"
              >
                Dismiss
          </Button>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

// export default function Table({
//   list,
//   sortKey,
//   onSort,
//   sortsFunctions,
//   onDismiss,
//   isSortReverse
// }) {
//   const sortedList = sortsFunctions[sortKey](list);
//   const reversedSortedList = isSortReverse ? sortedList.reverse() : sortedList;
//   return (
//     <div className="table">
//       <div className="table-header">
//         <span style={largeColumn}>
//           <Sort sortKey={'TITLE'} onSort={onSort} activeSortKey={sortKey}>
//             Title
//           </Sort>
//         </span>
//         <span style={midColumn}>
//           <Sort sortKey={'AUTHOR'} onSort={onSort} activeSortKey={sortKey}>
//             Author
//           </Sort>
//         </span>
//         <span style={smallColumn}>
//           <Sort sortKey={'COMMENTS'} onSort={onSort} activeSortKey={sortKey}>
//             Comments
//           </Sort>
//         </span>
//         <span style={smallColumn}>
//           <Sort sortKey={'POINTS'} onSort={onSort} activeSortKey={sortKey}>
//             Points
//           </Sort>
//         </span>
//         <span style={smallColumn}>Archive</span>
//       </div>
//       {reversedSortedList.map(item => (
//         <div key={item.objectID} className="table-row">
//           <span style={largeColumn}>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span style={midColumn}>{item.author}</span>
//           <span style={smallColumn}>{item.num_comments}</span>
//           <span style={smallColumn}>{item.points}</span>
//           <span style={smallColumn}>
//             <Button
//               onClick={onDismiss}
//               objectID={item.objectID}
//               className="button-inline"
//             >
//               Dismiss
//             </Button>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
};
