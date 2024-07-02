"""'add_max_active_requests'

Revision ID: fcbe1ed550df
Revises: b2602e131636
Create Date: 2024-07-02 05:46:36.625905

"""
from alembic import op
import models as models
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fcbe1ed550df'
down_revision = 'b2602e131636'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('apps', schema=None) as batch_op:
        batch_op.add_column(sa.Column('max_active_requests', sa.Integer(), server_default=sa.text('0'), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('apps', schema=None) as batch_op:
        batch_op.drop_column('max_active_requests')

    # ### end Alembic commands ###
