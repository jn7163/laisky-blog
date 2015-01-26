#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os
import sys
import logging


def setup_log(log_name, log_dir):
    _format = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    logging.basicConfig(
        filename=os.path.join(log_dir, '{}.log'.format(log_name)),
        level=logging.DEBUG,
        format=_format
    )
    log = logging.getLogger()
    ch = logging.StreamHandler(sys.stdout)
    ch.setLevel(logging.INFO)
    formatter = logging.Formatter(_format)
    ch.setFormatter(formatter)
    log.addHandler(ch)
