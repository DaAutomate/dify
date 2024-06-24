"""add chatbot color theme

Revision ID: bb8273f667ad
Revises: 4ff534e1eb11
Create Date: 2024-06-23 17:09:36.733294

"""
import sqlalchemy as sa
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = 'bb8273f667ad'
down_revision = '4ff534e1eb11'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sites', schema=None) as batch_op:
        batch_op.add_column(sa.Column('show_workflow_steps', sa.Boolean(), server_default=sa.text('true'), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sites', schema=None) as batch_op:
        batch_op.drop_column('show_workflow_steps')

    # ### end Alembic commands ###