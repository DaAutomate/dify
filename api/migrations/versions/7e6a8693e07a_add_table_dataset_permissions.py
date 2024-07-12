"""add table dataset_permissions

Revision ID: 7e6a8693e07a
Revises: 4ff534e1eb11
Create Date: 2024-06-25 03:20:46.012193

"""
import sqlalchemy as sa
from alembic import op

import models as models

# revision identifiers, used by Alembic.
revision = '7e6a8693e07a'
down_revision = 'b2602e131636'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dataset_permissions',
    sa.Column('id', models.StringUUID(), server_default=sa.text('uuid_generate_v4()'), nullable=False),
    sa.Column('dataset_id', models.StringUUID(), nullable=False),
    sa.Column('account_id', models.StringUUID(), nullable=False),
    sa.Column('has_permission', sa.Boolean(), server_default=sa.text('true'), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP(0)'), nullable=False),
    sa.PrimaryKeyConstraint('id', name='dataset_permission_pkey')
    )
    with op.batch_alter_table('dataset_permissions', schema=None) as batch_op:
        batch_op.create_index('idx_dataset_permissions_account_id', ['account_id'], unique=False)
        batch_op.create_index('idx_dataset_permissions_dataset_id', ['dataset_id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dataset_permissions', schema=None) as batch_op:
        batch_op.drop_index('idx_dataset_permissions_dataset_id')
        batch_op.drop_index('idx_dataset_permissions_account_id')
    op.drop_table('dataset_permissions')
    # ### end Alembic commands ###
