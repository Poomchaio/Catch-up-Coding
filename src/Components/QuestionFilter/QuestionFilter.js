import React, { Component } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

class QuestionFilter extends Component {
  static PropTypes = {
    handleFilter: PropTypes.func,
    sections: PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.number,
    }),
    keyword: PropTypes.string,
  };

  static defaultProps = {
    handleFilter: () => {},
    sections: [],
    keyword: '',
  };

  state = { postByUser: false, section: '', keyword: '' };

  handleChange = (e, { name, value, type }) => {
    if (name === 'postByUser') this.setState({ [name]: !value });
    else this.setState({ [name]: value });
  };
  render() {
    const { postByUser, section, sortBy } = this.state;
    const { sections, handleFilter } = this.props;
    console.log(sections);
    return (
      <Flex mx={2} p={2} justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={1} align="center" p={2}>
          <Text fontSize="24px" fontWeight="800">
            Filter
          </Text>
        </Box>
        <Form>
          <Box width={1} p={2}>
            <Form.Input
              label="keyword"
              name="keyword"
              placeholder="Keyword"
              onChange={this.handleChange}
            />
          </Box>
          <Box width={1} p={2}>
            <Form.Field
              control={Select}
              name="section"
              options={sections}
              placeholder="Section"
              value={section}
              onChange={this.handleChange}
            />
          </Box>
          <Box width={1} p={2}>
            <Form.Checkbox
              label="Post by me"
              name="postByUser"
              onChange={this.handleChange}
              value={postByUser}
            />
          </Box>

          <Box width={1} align="center" p={2}>
            <Button
              content="Filter"
              icon="search"
              labelPosition="right"
              onClick={() => handleFilter(this.state)}
            />
          </Box>
        </Form>
      </Flex>
    );
  }
}

export default QuestionFilter;
