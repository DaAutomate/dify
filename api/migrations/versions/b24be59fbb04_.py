"""empty message

Revision ID: b24be59fbb04
Revises: 187385f442fc
Create Date: 2024-01-17 01:31:12.670556

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b24be59fbb04'
down_revision = 'de95f5c77138'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('app_model_configs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('text_to_speech', sa.Text(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('app_model_configs', schema=None) as batch_op:
        batch_op.drop_column('text_to_speech')

    # ### end Alembic commands ###
