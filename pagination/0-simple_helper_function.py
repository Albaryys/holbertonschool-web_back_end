#!/usr/bin/env python3
"""
0-simple_helper_function.py
"""


def index_range(page, page_size):
    """Calculate the start index by subtracting 1 from the page number"""
    start_index = (page - 1) * page_size

    """Calculate the end index by adding the page size to the start index"""
    end_index = start_index + page_size

    return start_index, end_index
