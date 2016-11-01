import React, {PropTypes, Component} from 'react';
import pick from 'lodash/pick';
import themeable from 'react-instantsearch/src/core/themeable';
import {RefinementList} from 'react-instantsearch';
import translatable from 'react-instantsearch/src/core/translatable';
import List from 'react-instantsearch/src/components/List';

const theme = RefinementList.defaultClassNames

class RefinementListFactory extends Component {
  static propTypes = {
    applyTheme: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    refine: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })),
    selectedItems: PropTypes.arrayOf(PropTypes.string),
    showMore: PropTypes.bool,
    limitMin: PropTypes.number,
    limitMax: PropTypes.number,
  };

  onItemChange = (item, e) => {
    const {selectedItems} = this.props;
    const nextSelectedItems = selectedItems.slice();
    const idx = nextSelectedItems.indexOf(item.value);
    if (e.target.checked && idx === -1) {
      nextSelectedItems.push(item.value);
    } else if (!e.target.checked && idx !== -1) {
      nextSelectedItems.splice(idx, 1);
    }
    this.props.refine(nextSelectedItems);
  }

  renderItem = (item, selected, key) => {
    const {translate, applyTheme} = this.props;

    return (
      <label key={key}>
        <input
          {...applyTheme('itemCheckbox', 'itemCheckbox', selected && 'itemCheckboxSelected')}
          type="checkbox"
          checked={selected}
          onChange={this.onItemChange.bind(null, item)}
        />
        <span {...applyTheme('itemLabel', 'itemLabel', selected && 'itemLabelSelected')}>
          {item.value}
        </span>
        {' '}
        <span {...applyTheme('itemCount', 'itemCount', selected && 'itemCountSelected')}>
          {translate('count', item.count)}
        </span>
      </label>
    );
  };

  render() {
    const {title} = this.props
    return (
      <article data-app={`facet-${title}`} className='ph3 ph4-ns pb4'>
        <div className='f6 fw6 ttu tracked pb2 light-silver'>{title}</div>
          <List
            renderItem={this.renderItem}
            {...pick(this.props, [
              'applyTheme',
              'translate',
              'items',
              'selectedItems',
              'showMore',
              'limitMin',
              'limitMax',
            ])}
          />
      </article>
    );
  }
}

const CustomRefinementList = themeable(theme)(
  translatable({
    showMore: extended => extended ? 'Show less' : 'Show more',
    count: count => count.toLocaleString(),
  })(RefinementListFactory)
);

export default RefinementList.connect(CustomRefinementList);
